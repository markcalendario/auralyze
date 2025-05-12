# 🎧 Auralyze

**Auralyze** is a web-based AI tool that transcribes and summarizes spoken audio using advanced speech recognition and natural language processing. Upload or drop audio files to get clean, concise summaries of conversations, meetings, and voice notes.

---

## 🎯 Purpose

To learn and use the basic functions of huggingface's transformers.

---

## 🚀 Features

- 🎙️ Upload or drag-and-drop audio files
- 🧠 Speech-to-text powered by Whisper of OpenAI
- ✂️ Summarization using transformer models (BART)
- 💻 Web UI built with React and SCSS Modules
- ⚡ Fast, responsive interface with drag-over feedback
- 🧪 Easy to customize and extend

---

## 🛠️ Tech Stack

- **Frontend**: React, SASS Modules
- **Backend**: FastAPI, Hugging Face Transformers
- **Speech-to-Text**: OpenAI Whisper
- **Summarization**: BART
- **Deployment**: Docker, Vercel/Render

---

## 📦 Development

```bash
# Clone the repo
git clone https://github.com/markcalendario/auralyze.git
cd auralyze
```

### Client

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Server

```bash
# Navigate to client directory
cd server

# Set environment to development
SET ENV=dev

# Install dependencies
pip install -r requirements.txt

# Start the development server
fastapi dev main.py
```

## 🚀 Deployment

```bash
# Build and run client and server concurrently in a detached screen
docker compose up --build -d
```
