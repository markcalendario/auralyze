import os
from pydantic_settings import BaseSettings, SettingsConfigDict

ENV = os.getenv("ENV", "dev") # dev (default) | prod

class Config(BaseSettings):
  CLIENT: str
  model_config = SettingsConfigDict(env_file=f".env.{ENV}")