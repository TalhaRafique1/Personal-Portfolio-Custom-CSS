import Link from 'next/link'
import React from 'react'
import cssStyle from './Header.module.css'; // Import the CSS module

const Header = () => {
  return (
    <header className={cssStyle.header}>
      <div className={cssStyle.container}>
        <Link href="/" className={cssStyle.logo}>
          <h2 className={cssStyle.logoText}>Talha Rafique</h2>
        </Link>
        <nav className={cssStyle.nav}>
          <Link href="/" className={cssStyle.navLink}>Home</Link>
          <Link href="/about" className={cssStyle.navLink}>About</Link>
          <Link href="/projects" className={cssStyle.navLink}>Projects</Link>
          <Link href="/contact" className={cssStyle.navLink}>Contact</Link>
        </nav>
       
      </div>
    </header>
  )
}

export default Header;
