import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/logo.png" width={128} height={77} />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contacts</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;


