import mimetypes, os, aiofiles, uuid, whisper
from transformers import pipeline

def is_audio_file_valid(audio):
  # Check file extension
  valid_extensions = ['.mp3', '.wav', '.flac', '.ogg', '.aac']
  extension = audio.filename.split('.')[-1].lower()

  if f".{extension}" not in valid_extensions:
    return False
  
  # Check MIME type
  mime_type, _ = mimetypes.guess_type(audio.filename)
  if mime_type is None or not mime_type.startswith('audio'):
    return False
  
  return True


async def save_audio_file(audio):
  upload_dir = "./uploads/"
  os.makedirs(upload_dir, exist_ok=True)

  # Change audio file name
  ext = os.path.splitext(audio.filename)[1] 
  new_filename = f"{uuid.uuid4().hex}{ext}"
  
  file_path = os.path.join(upload_dir, new_filename)

  try:
    async with aiofiles.open(file_path, "wb") as out_file:
      while content := await audio.read(1024):
        await out_file.write(content)
    return file_path
  except Exception as e:
    print(e)
    return None
  

def transcribe(audio_file_path):
  print(f"[TRANSCRIPTION]: Started for {audio_file_path}")
  model = whisper.load_model("tiny")
  result = model.transcribe(audio_file_path)
  print(f"[TRANSCRIPTION]: Finished.")

  return result["text"]


def summarize(text):
  print(f"[SUMMARIZATION]: Started.")
  summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
  summary = summarizer(text, max_length=60, min_length=20, do_sample=False)
  print(f"[SUMMARIZATION]: Finished.")

  return summary[0]["summary_text"]