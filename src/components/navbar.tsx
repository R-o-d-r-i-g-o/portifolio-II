"use client"

import Link from 'next/link';
import { useTheme } from "next-themes";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const isLightTheme = () =>
    theme === "light"

  const handleThemeChange = () => {
    setTheme(isLightTheme() ? "dark" : "light");
  }

  return (
    <header className='header h-20'>
      <button onClick={handleThemeChange}>
        {isLightTheme() ? <MdOutlineLightMode size={30} /> : <MdOutlineDarkMode size={30} /> }
      </button>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/' >
          About
        </Link>
        <Link href='/projects'>
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
