"use client"

import { Suspense, lazy } from 'react'
import { ThemeProvider } from "next-themes";

import Loading from '../app/loading'

type Props = {
    children: React.ReactNode
}

const BackgroundVideo = lazy(() => import('../components/background-video'))

const Providers = ({ children }: Props) => (
  <ThemeProvider enableSystem={false} attribute="class">
    <Suspense fallback={<Loading />}>
      <BackgroundVideo />
    </Suspense>
    {children}
  </ThemeProvider>
);

export default Providers;