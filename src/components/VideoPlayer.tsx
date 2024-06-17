import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

import { CaptionButton } from './buttons/CaptionButton';
import { EpisodeButton } from './buttons/EpisodeButton';
import { NextButton } from './buttons/NextButton';
import { VolumeButton } from './buttons/VolumeButton';
import { ProgressBar } from './ProgressBar';
import { PlayerButton } from './PlayerButton';
import { MaximizeButton } from './buttons/MaximizeButton';
import { RewindForwardButtons } from './buttons/RewindForwardButtons';

import './VideoPlayer.css';


function TitleLabel() {
  return (
    <p className="title">
      <span className="series">Blender Foundation</span>
      <span className="episode">Big Buck Bunny</span>
    </p>
  );
}

export default function VideoPlayer() {
  const video_url = ""
  const audio_url = ""
  const is_mp4 = video_url.endsWith('.mp4');
  
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  return (
    <div className='video-container'>
      {is_mp4 && <video ref={videoRef} src={video_url} controls />}
      {!is_mp4 && <ReactHlsPlayer playerRef={videoRef} muted src={video_url} />}
      <audio ref={audioRef} src={audio_url} />

      <div className="controls-container">
        <ProgressBar videoRef={videoRef} audioRef={audioRef}/>
        
        <div className="controls">
          <PlayerButton videoRef={videoRef} audioRef={audioRef} />
          <RewindForwardButtons videoRef={videoRef} audioRef={audioRef} />
          <VolumeButton />
          <TitleLabel />
          <NextButton />
          <EpisodeButton />
          <CaptionButton />
          <MaximizeButton videoRef={videoRef} />
        </div>
      </div>
    </div>
  );
};