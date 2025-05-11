import DropZone from "@/components/Forms/DropZone/DropZone.jsx";
import TextArea from "@/components/Forms/TextArea/TextArea.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";
import { Fragment } from "react";
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
  return (
    <section className={styles.auralyze}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <DropZone
            id="dropzone"
            accept="audio/*"
            onChange={(evt) => console.log(evt.target.files)}
          />

          <Result />
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
