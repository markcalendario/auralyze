import { useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.scss";

export default function AudioPlayer({ audioFile }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio on mount
  useEffect(() => {
    if (!audioFile) return;

    const url = URL.createObjectURL(audioFile);
    audioRef.current = new Audio(url);
    setIsPlaying(true);

    // Cleanup when component unmounts
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [audioFile]);

  // Control play/pause based on isPlaying
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);

  const handleToggleAudio = () => setIsPlaying((prev) => !prev);

  return (
    <button
      onClick={handleToggleAudio}
      className={styles.audioPlayer}>
      <img
        className={isPlaying ? styles.playing : undefined}
        src="/assets/images/logo/auralyze.png"
        alt={isPlaying ? "pause button" : "play button"}
      />
    </button>
  );
}
