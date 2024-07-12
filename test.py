from ezauth_sdk import EZAuth, EZAuthConfig
import logging

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

ezauth = EZAuth("http://localhost:3250/", EZAuthConfig(auto_cookie_name="session"))

# ezauth.register("sas@gmail.com", "SASS", "jonas123!A", {"createdAt": True})
ezauth.login("SASS", "jonas123!A")
print(ezauth)
ezauth.update_profile({"2fa_secret": False})
# ezauth.reset_password("jonas123!B", "jonas123!A")
# ezauth.confirm_reset_password(input("Enter Code: "))
# print(ezauth.enable_2fa())
# ezauth.confirm_2fa_enable(input("Enter Code: "))

print(ezauth.logout())
