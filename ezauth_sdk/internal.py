import requests


class EZAuthInternal:
    """Class for interacting with the Internal API of EZAuth."""

    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.api_key = api_key

    def _request(self, method: str, path: str, data: dict = None):
        headers = {"internal_api_key": self.api_key}
        response = requests.request(
            method, f"{self.base_url}{path}", headers=headers, json=data
        )
