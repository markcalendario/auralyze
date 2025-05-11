from fastapi import FastAPI
from config import Config
from src.apis.auralyze.route import auralyze

app = FastAPI()
config = Config()

app.include_router(auralyze, prefix="/auralyze")