import Link from "next/link";
import Image from "next/image";

import { socialLinks } from "../../public/mocks";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="footer font-poppins">
    <hr className="dark:border-slate-200 border-black" />
    <div className="footer-container flex flex-col md:flex-row justify-center md:justify-between">
      <p>
        © {currentYear} <strong>R. M. Ribeiro</strong>. All rights reserved.
      </p>
      <div className="flex gap-3 justify-center items-center">
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.link} target="_blank">
            <Image
              src={link.iconUrl}
              alt={link.name}
              className="w-6 h-6 object-contain"
              height={20}
              width={20}
            />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
