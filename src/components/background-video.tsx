"use client"

import { useTheme } from 'next-themes'
import React, { useState, useLayoutEffect } from "react"

import LazyLoad from 'react-lazyload';

const BackgroundVideo = () => {
  const { theme } = useTheme()
  const [selectedVideo, setSelectedVideo] = useState('')

  useLayoutEffect(() => {
    setSelectedVideo(theme === 'light'
      ? '/videos/background-video-white.mp4'
      : '/videos/background-video-black.mp4'
    );
  }, [selectedVideo, theme])

  return (
    <LazyLoad once>
      <video
        key={selectedVideo}
        autoPlay
        muted
        loop
        preload="auto"
        className="fixed inset-0 w-full h-full left-1/2 top-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        <source src={selectedVideo} type="video/mp4"/>
      </video>
    </LazyLoad>
  );
};

export default BackgroundVideo;