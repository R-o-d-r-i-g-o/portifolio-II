"use client"

import { ThemeProvider } from "next-themes";
import BackgroundVideo from '../components/background-video'

type Props = {
    children: React.ReactNode
}

const Providers = ({ children }: Props) => (
  <ThemeProvider enableSystem attribute="class">
    <BackgroundVideo />
    {children}
  </ThemeProvider>
);

export default Providers;