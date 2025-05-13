import AudioPlayer from "@/components/AudioPlayer/AudioPlayer.jsx";
import DropZone from "@/components/Forms/DropZone/DropZone.jsx";
import TextArea from "@/components/Forms/TextArea/TextArea.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";
import ResultLoader from "@/components/ResultLoader/ResultLoader.jsx";
import { Fragment, useState } from "react";
import styles from "./Auralyze.module.scss";

export default function AuralyzePage() {
  return (
    <Fragment>
      <Navbar />
      <Auralyze />
    </Fragment>
  );
}

function Auralyze() {
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(null);

  const handleSelectFile = async (audio) => {
    setIsProcessing(true);

    const formData = new FormData();
    formData.append("audio", audio);

    const url = import.meta.env.VITE_SERVER_URL + "/auralyze";
    const config = { method: "POST", body: formData };
    const request = await fetch(url, config);
    const response = await request.json();

    setIsProcessing(false);

    if (!response.success) return alert(response.message);
    setResult(response.data);
  };

  const renderResult =
    !result && isProcessing ? (
      <ResultLoader />
    ) : (
      <Result
        summary={result?.summary}
        transcript={result?.transcript}
      />
    );

  return (
    <section className={styles.auralyze}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {renderResult}
          <Audio
            isProcessing={isProcessing}
            handleSelectFile={handleSelectFile}
          />
        </div>
      </div>
    </section>
  );
}

function Result({ summary, transcript }) {
  return (
    <div className={styles.result}>
      <h1>Transcript</h1>
      <TextArea
        value={transcript}
        disabled
      />
      <h1>Summary</h1>
      <TextArea
        value={summary}
        disabled
      />
    </div>
  );
}

function Audio({ isProcessing, handleSelectFile }) {
  const [audioFile, setAudioFile] = useState(null);

  const handleDropFile = (evt) => {
    const file = evt.target.files[0];
    if (!file) return;

    setAudioFile(file);
    handleSelectFile(file);
  };

  return (
    <div className={styles.audio}>
      <h1 className={styles.title}>
        {audioFile ? "Audio Preview" : "Select an Audio"}
      </h1>

      <DropZone
        id="a"
        accept="audio/*"
        onChange={handleDropFile}
        disabled={isProcessing}
      />

      {audioFile && <AudioPlayer audioFile={audioFile} />}
    </div>
  );
}
