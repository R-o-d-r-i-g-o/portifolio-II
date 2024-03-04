import React from "react"
import { useTheme } from 'next-themes'

const BackgroundVideo = () => {
  const { resolvedTheme: theme } = useTheme()

  const videoSelected = theme === 'light'
    ? '/videos/background-video-white.mp4'
    : '/videos/background-video-black.mp4';

  return (
    <video key={videoSelected} autoPlay muted loop className="-z-10 fixed top-0">
      <source src={videoSelected} type="video/mp4" />
    </video>
  )
};

export default BackgroundVideo;