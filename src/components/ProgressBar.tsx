import React from 'react';

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const ProgressBar = ({ videoRef, audioRef } : Props) => {
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video) return;
    if (!audio) return;

    const progress = e.currentTarget;
    const rect = progress.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const time = percent * video.duration;

    video.currentTime = time;
    audio.currentTime = time;
  };

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const watched = (video.currentTime / video.duration) * 100;
      const playhead = (video.currentTime / video.duration) * 100;
      const remaining = video.duration - video.currentTime;

      const watchedBar = document.querySelector('.watched-bar') as HTMLDivElement;
      const playheadBar = document.querySelector('.playhead') as HTMLDivElement;
      const timeRemaining = document.querySelector('.time-remaining') as HTMLDivElement;

      watchedBar.style.width = `${watched}%`;
      playheadBar.style.left = `${playhead}%`;
      timeRemaining.textContent = new Date(remaining * 1000).toISOString().substr(11, 8);
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };

  }, []);


  return (
    <div className="progress-controls">
      <div className="progress-bar" onClick={handleProgressClick}>
        <div className="watched-bar"></div>
        <div className="playhead"></div>
      </div>
      <div className="time-remaining">
        {videoRef.current?.duration}
      </div>
    </div>
  );
};
