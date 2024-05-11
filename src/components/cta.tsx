import Link from "next/link";

const CTA = () => (
  <section className="cta">
    <p className="cta-text dark:text-white">
      Have a project in mind? <br className="sm:block hidden" />
      Let’s build something together!
    </p>
    <Link href="/contact" className="btn">
      Contact
    </Link>
  </section>
);

export default CTA;
