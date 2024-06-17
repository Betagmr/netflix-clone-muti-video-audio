import React from 'react';
import RewindIcon from '../icons/RewindIcon';
import FastForwardIcon from '../icons/FastForward';

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export function RewindForwardButtons({ videoRef, audioRef } : Props) {
  const fastRewind = () => {
    if (!videoRef.current) return;
    if (!audioRef.current) return;

    videoRef.current.currentTime -= 10;
    audioRef.current.currentTime = videoRef.current.currentTime;
  };

  const fastForward = () => {
    if (!videoRef.current) return;
    if (!audioRef.current) return;

    videoRef.current.currentTime += 10;
    audioRef.current.currentTime = videoRef.current.currentTime;
  };

  return (
    <>
      <button className="rewind" onClick={fastRewind}><RewindIcon /></button>
      <button className="fast-forward" onClick={fastForward}><FastForwardIcon /></button>
    </>
  );
}
