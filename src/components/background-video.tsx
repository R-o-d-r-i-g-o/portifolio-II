import React from "react"
import { useTheme } from 'next-themes'

const BackgroundVideo = () => {
  const { theme } = useTheme()

  const videoSelected = theme === 'light'
    ? '/videos/background-video-white.mp4'
    : '/videos/background-video-black.mp4';

  return (
    <video
      key={videoSelected}
      autoPlay
      muted
      loop
      className="fixed inset-0 w-full h-full left-1/2 top-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
    >
      <source src={videoSelected} type="video/mp4"/>
    </video>
  )
};

export default BackgroundVideo;