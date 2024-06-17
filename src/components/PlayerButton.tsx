import React from 'react';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export function PlayerButton({ videoRef, audioRef }: Props) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playVideo = () => {
    if (!videoRef.current) return;
    if (!audioRef.current) return;

    // const diferencePerSecond = 1 - (videoRef.current.duration / audioRef.current.duration);
    // audioRef.current.playbackRate = 1 + diferencePerSecond;

    setIsPlaying(true);
    videoRef.current.play();
    audioRef.current.play();
    audioRef.current.currentTime = videoRef.current.currentTime;

    console.log('videoRef', videoRef.current.currentTime)
    console.log('audioRef', audioRef.current.currentTime)
  };

  const pauseVideo = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
    audioRef.current?.pause();
  };

  return (
    <>
      {!isPlaying ?
        <button onClick={playVideo}><PlayIcon /></button>
        :
        <button onClick={pauseVideo}><PauseIcon /></button>}
    </>
  );

}
