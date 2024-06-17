import React from 'react';
import MaximizeIcon from '../icons/MaximizeIcon';
import MinimizeIcon from '../icons/MinimizeIcon';


interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export function MaximizeButton({ videoRef }: Props) {
  const [isMaximized, setIsMaximized] = React.useState(false);

  const fullScreen = () => {
    if (!videoRef.current) return;
    videoRef.current.requestFullscreen();
  };

  return (
    <>
      {!isMaximized ?
        <button className="full-screen" onClick={fullScreen}><MaximizeIcon /></button>
        :
        <button className="full-screen"><MinimizeIcon /></button>}
    </>
  );
}
