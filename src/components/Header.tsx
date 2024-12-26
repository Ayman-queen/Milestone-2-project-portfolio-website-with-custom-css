import Link from 'next/link';
import '@/app/styles/header.css'; // Import the header-specific styles

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <Link href="/" className="header-link">Home</Link>
        <Link href="/About" className="header-link">About</Link>
        <Link href="/Contact" className="header-link">Contact</Link>
        <Link href="/skills" className="header-link">Skills</Link>
        <Link href="/Projects" className="header-link">Projects</Link>
        <Link href="/blog" className="header-link">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
