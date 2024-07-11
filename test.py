from ezauth_sdk import EZAuth, EZAuthConfig
import logging

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

ezauth = EZAuth("http://localhost:3250/", EZAuthConfig(auto_cookie_name="session"))

# ezauth.register("sas@gmail.com", "SASS", "jonas123!A", {"amongus": True})
ezauth.login("SASS", "jonas123!A")
print(ezauth)
print(ezauth.logout())
