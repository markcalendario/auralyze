import whisper
from fastapi import APIRouter, UploadFile
from src.apis.auralyze.utils import is_audio_file_valid, save_audio_file, transcribe, summarize

auralyze = APIRouter()

@auralyze.post("/")
async def post_auralyze(audio: UploadFile):
  if not is_audio_file_valid(audio):
    return {"success": False, "message": "Invalid audio file."}
  
  audio_file_path = await save_audio_file(audio)

  if not audio_file_path:
    return {"success": False, "message": "Error. Cannot upload audio file."}
  
  transcript = transcribe(audio_file_path)
  summary = summarize(transcript)
  
  return {
    "success": True, 
    "message": "Error. Cannot upload audio file.",
    "data": {
      "transcript": transcript,
      "summary": summary
    }
  }

  

