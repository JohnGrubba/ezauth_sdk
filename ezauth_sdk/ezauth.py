import requests, logging, datetime


class EZAuthConfig:
    def __init__(self, auto_cookie_name: str) -> None:
        self.auto_cookie_name = auto_cookie_name
        pass


class EZAuth:
    """Class for interacting with the Public API of EZAuth."""

    def __init__(self, base_url: str, config: EZAuthConfig):
        base_url = base_url.rstrip("/")
        # Check connection
        try:
            r = requests.get(f"{base_url}/up")
        except:
            raise Exception("Could not connect to EZAuth API.")
        if r.status_code != 200:
            raise Exception("Faulty Installation of EZAuth.")
        logging.info("Connected to EZAuth API")
        self.base_url = base_url
        self.config = config

        self.session_token = None
        self.expires = None

        self.register_temp_email = None

        self.confirm_pending = False

    def __login_usr(self, r: requests.Response):
        # User Created and logged in
        logging.info("User Created and Logged In")
        self.session_token = r.json()["session_token"]
        self.expires = datetime.datetime.now() + datetime.timedelta(
            seconds=r.json()["expires"]
        )

    def register(
        self, email: str, username: str, password: str, add_userdata: dict = None
    ):
        r = requests.post(
            f"{self.base_url}/signup",
            json={
                **add_userdata,
                "email": email,
                "username": username,
                "password": password,
            },
        )
        if r.status_code == 200:
            # User Created and logged in
            logging.info("User Created and Logged In")
            self.__login_usr(r)
        elif r.status_code == 204:
            logging.info("Confirmation E-Mail was sent")
            self.register_temp_email = email
            return None
        else:
            raise Exception(r.json()["detail"])

    def confirm_email(self, token: str):
        if not self.register_temp_email:
            raise Exception("No E-Mail Confirmation Needed")
        r = requests.post(
            f"{self.base_url}/signup/confirm",
            json={"code": token, "email": self.register_temp_email},
        )
        if r.status_code == 200:
            logging.info("Account Created")
            self.__login_usr(r)
            self.register_temp_email = None
        else:
            raise Exception(r.json()["detail"])

    def login(self, credential: str, password: str, two_factor: str = None):
        r = requests.post(
            f"{self.base_url}/login",
            json={
                "identifier": credential,
                "password": password,
                "two_factor_code": two_factor,
            },
        )
        if r.status_code == 200:
            logging.info("Logged In")
            self.session_token = r.json()["session_token"]
            self.expires = datetime.datetime.now() + datetime.timedelta(
                seconds=r.json()["expires"]
            )
        else:
            raise Exception(r.json()["detail"])

    def _request(self, method: str, path: str, data: dict = None):
        if self.session_token is None:
            raise Exception("Not Logged In")
        headers = {"Accept": "application/json"}
        path = path.lstrip("/").rstrip("/")
        response = requests.request(
            method,
            f"{self.base_url}/{path}",
            headers=headers,
            json=data,
            cookies={self.config.auto_cookie_name: self.session_token},
        )
        return response

    def profile(self) -> dict:
        return self._request("get", "/profile").json()

    def __str__(self) -> str:
        # Print Profile Information Dictionary formatted as string
        return str(self.profile())

    def logout(self) -> bool:
        return self._request("get", "/logout").status_code == 204

    def update_profile(self, data: dict) -> dict:
        return self._request("patch", "/profile", data).json()

    def reset_password(self, old_password: str, new_password: str):
        r = self._request(
            "post",
            "/profile/reset-password",
            {"password": new_password, "old_password": old_password},
        )
        if r.status_code == 204:
            logging.info("Password Change Pending (Check Email)")
            self.confirm_pending = True
        elif r.status_code == 200:
            logging.info("Password Changed")
        else:
            raise Exception(r.json()["detail"])

    def confirm_reset_password(self, token: str):
        r = self._request("post", "/profile/confirm-password", {"code": token})
        if r.status_code == 204:
            logging.info("Password Changed")
        else:
            raise Exception(r.json()["detail"])

    def enable_2fa(self) -> dict:
        r = self._request("post", "/2fa/enable")
        if r.status_code == 200:
            return r.json()
        else:
            raise Exception(r.json()["detail"])

    def confirm_2fa_enable(self, token: str):
        r = self._request("post", "/2fa/confirm-enable", {"code": token})
        if r.status_code == 204:
            logging.info("2FA Enabled")
        else:
            raise Exception(r.json()["detail"])
