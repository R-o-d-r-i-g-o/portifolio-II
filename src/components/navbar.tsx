import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <header className='header h-20'>
      <Link href='/'>
      <Image src="logo.svg" alt='logo' className='w-18 h-18 object-contain' width={40} height={40}/>
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/about' >
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
