import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, TreePine } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <TreePine size={36} color="var(--color-accent)" />
            <div className={styles.logoText}>
              <h2>DesaPortal</h2>
              <span>Desa Makmur</span>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Mewujudkan desa mandiri, inovatif, dan sejahtera melalui transparansi publik dan digitalisasi layanan warga.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Menu Navigasi</h3>
          <ul>
            <li><Link to="/profil">Profil Desa</Link></li>
            <li><Link to="/potensi">UMKM & Pariwisata</Link></li>
            <li><Link to="/layanan">Layanan Administrasi</Link></li>
            <li><Link to="/transparansi">Transparansi Dana</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Balai Desa</h3>
          <ul>
            <li>
              <MapPin size={20} />
              <span>Jl. Raya Desa Makmur No. 1, Kec. Sejahtera, Kab. Maju</span>
            </li>
            <li>
              <Phone size={20} />
              <span>(0351) 987654</span>
            </li>
            <li>
              <Mail size={20} />
              <span>pemdes@makmur.desa.id</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Pemerintah Desa Makmur. Ditenagai oleh DesaPortal-ID.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
