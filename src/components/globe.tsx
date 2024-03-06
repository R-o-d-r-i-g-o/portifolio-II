"use client"

import React, { useEffect, Suspense, useState, useRef, memo, lazy } from 'react'

import { GlobeMethods } from "react-globe.gl";
import countries from '../constants/globe-countries.json'

import Loading from '../app/loading'

const GlobeComp = lazy(() => import("react-globe.gl"))

const interpolate = (start: number, end: number, percentage: number) => {
  return Math.round(start + (end - start) * percentage);
};

const generateGradientColor = () => {
  const colorStart = [51, 100, 244]; // light blue
  const colorEnd = [0, 0, 128]; // dark blue

  const percentage = Math.random();
  const interpolatedColor =
    colorStart.map((start, index) => interpolate(start, colorEnd[index], percentage));

  return `rgb(${interpolatedColor.join(',')})`;
};

const Globe = () => {
  const globeEl = useRef<GlobeMethods>();
  const fixedHeightPX = 500

  const [useClient, setUseClient] = useState(false)
  const [globeWidth, setGlobeWidth] = useState<number>()

  const loadEffects = () => {
    if (!globeEl.current)
      return;

    // globeEl.current.controls().enableZoom = false;
    globeEl.current!.controls().autoRotate = true;
    globeEl.current!.controls().autoRotateSpeed = 1;
    globeEl.current!.pointOfView({ lat: 0, lng: 0, altitude: 2 });

    if (window.innerWidth <= 880)
      globeEl.current?.pointOfView({ lat: 0, lng: 0, altitude: 2.6 })
  }

  const suspectEffect = (
    <Suspense fallback={<Loading />}>
      <GlobeComp
        width={globeWidth}
        height={fixedHeightPX}
        onGlobeReady={loadEffects}
        backgroundColor='rgba(0,0,0,0)'
        ref={globeEl}
        showAtmosphere
        enablePointerInteraction
        hexPolygonsData={countries.features}
        hexPolygonResolution={2}
        hexPolygonMargin={0.3}
        hexPolygonUseDots={true}
        hexPolygonColor={generateGradientColor}
      />
    </Suspense>
  );

  useEffect(() => {
    setUseClient(true)
    if (window.innerWidth > 880) {
      setGlobeWidth(600);
      return;
    }

    setGlobeWidth(350);
  }, [globeEl]);

  return (
    <div style={{ height: fixedHeightPX }} className="flex items-center md:pl-8">
      {useClient && suspectEffect}
    </div>
  )
};

export default memo(Globe);