import { useState } from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import styles from "./DropZone.module.scss";

export default function DropZone({ id, className, onChange, accept }) {
  if (!id) throw new Error("ID for drop zone is required.");

  const [fileName, setFileName] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (evt) => {
    setFileName(evt.target.files[0].name);
    onChange(evt);
  };

  const handleDragOver = (evt) => {
    evt.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (evt) => {
    evt.preventDefault();
    setIsDragging(false);

    const file = evt.dataTransfer.files[0];
    if (!file) return;

    setFileName(file.name);

    const fakeEvent = { target: { files: evt.dataTransfer.files } };
    onChange(fakeEvent);
  };

  const classes = [
    styles.dropZone,
    className,
    isDragging ? styles.dragOver : null
  ]
    .filter(Boolean)
    .join(" ");

  const label = fileName || "Browse or Drop File";

  return (
    <label
      className={classes}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
      <div className={styles.icon}>
        <FaCloudArrowUp />
      </div>

      <p>{label}</p>

      <input
        id={id}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
      />
    </label>
  );
}
