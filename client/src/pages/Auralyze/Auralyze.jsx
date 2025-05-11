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
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUploadAudio = async (evt) => {
    setResult(null);
    setIsProcessing(false);

    const file = evt.target.files[0];

    const formData = new FormData();
    formData.append("audio", file);

    setIsProcessing(true);

    const url = import.meta.env.VITE_SERVER_URL + "/auralyze";
    const config = { method: "POST", body: formData };
    const request = await fetch(url, config);
    const response = await request.json();

    if (response.success) setResult(response.data);
    else alert(response.message);

    setIsProcessing(false);
  };

  const content =
    isProcessing && result === null ? (
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
          <DropZone
            id="dropzone"
            accept="audio/*"
            onChange={handleUploadAudio}
          />
          {content}
        </div>
      </div>
    </section>
  );
}

function Result({ transcript, summary }) {
  return (
    <div className={styles.resultArea}>
      <div className={styles.transcript}>
        <h1>Transcript</h1>
        <TextArea
          value={transcript}
          disabled
        />
      </div>

      <div className={styles.summary}>
        <h1>Summary</h1>
        <TextArea
          value={summary}
          disabled
        />
      </div>
    </div>
  );
}
