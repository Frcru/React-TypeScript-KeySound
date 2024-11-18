import { useRef } from "react";

interface Props {
  keyCode: string;
  audioSrc: string;
  currentKey: number;
}

export const Audio = ({ keyCode, audioSrc, currentKey }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  if (currentKey === Number(keyCode) && audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }
  return (
    <audio
      ref={audioRef}
      data-key={keyCode}
      src={`../../../assets/${audioSrc}.wav`}
    ></audio>
  );
};
