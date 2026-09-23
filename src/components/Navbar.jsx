import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, TreePine } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? 'glass ' + styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <div className={styles.iconWrapper}>
            <TreePine size={28} color="white" />
          </div>
          <div className={styles.logoText}>
            <h1>DesaPortal</h1>
            <span>Kabupaten Maju</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link to="/" className={styles.navLink}>Beranda</Link>
          <Link to="/profil" className={styles.navLink}>Profil Desa</Link>
          <Link to="/potensi" className={styles.navLink}>Potensi & UMKM</Link>
          <Link to="/layanan" className={styles.navLink}>Layanan Surat</Link>
          <Link to="/transparansi" className={styles.navLink}>Transparansi</Link>
        </nav>

        <div className={styles.navActions}>
          <button className={styles.searchBtn} aria-label="Search">
            <Search size={20} />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className={`${styles.mobileNav} glass`}>
          <Link to="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
          <Link to="/profil" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Profil Desa</Link>
          <Link to="/potensi" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Potensi & UMKM</Link>
          <Link to="/layanan" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Layanan Surat</Link>
          <Link to="/transparansi" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Transparansi</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
