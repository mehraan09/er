"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/birthday.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggle}
        className={`music-btn ${playing ? "playing" : ""}`}
        title={playing ? "Mute music" : "Play music"}
      >
        {playing ? "🎵" : "🔇"}
      </button>
    </>
  );
}