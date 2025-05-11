from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import Config
from src.apis.auralyze.route import auralyze

app = FastAPI()
config = Config()

app.add_middleware(
  CORSMiddleware,
  allow_origins=[config.CLIENT],  
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

app.include_router(auralyze, prefix="/auralyze")