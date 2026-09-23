import React from 'react';
import { ArrowRight, MapPin, Store, Leaf, FileCheck } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }}/> Desa Makmur, Kab. Sejahtera</span>
            <h1 className={styles.title}>
              Membangun Desa, <span>Memberdayakan</span> Warga
            </h1>
            <p className={styles.subtitle}>
              Selamat datang di portal resmi Desa Makmur. Mari bersama wujudkan desa yang mandiri, transparan, dan inovatif dengan potensi lokal yang mendunia.
            </p>
            <div className={styles.heroActions}>
              <button className="btn btn-primary">
                Jelajahi Potensi <ArrowRight size={18} />
              </button>
              <button className="btn btn-accent">
                Layanan Administrasi
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            {/* Placeholder for Village Hero Image (e.g. rice fields or village gate) */}
            <div className={styles.graphicPlaceholder}>
              <div className={`${styles.floatingCard} glass`}>
                <Store size={32} color="var(--color-accent)" />
                <div>
                  <h4>50+ UMKM Aktif</h4>
                  <p>Mendukung Ekonomi Warga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Menu */}
      <section className={styles.quickAccess}>
        <div className="container">
          <div className={styles.qaGrid}>
            <div className={`${styles.qaCard} glass`}>
              <div className={styles.qaIcon}><FileCheck size={28} /></div>
              <h3>Surat Pengantar</h3>
              <p>Ajukan surat keterangan usaha, domisili, atau pengantar RT/RW secara mandiri.</p>
            </div>
            <div className={`${styles.qaCard} glass`}>
              <div className={styles.qaIcon} style={{ color: 'var(--color-accent)', backgroundColor: 'rgba(234, 88, 12, 0.1)' }}><Store size={28} /></div>
              <h3>Pasar Desa</h3>
              <p>Etalase produk unggulan dari UMKM dan kerajinan lokal warga desa kami.</p>
            </div>
            <div className={`${styles.qaCard} glass`}>
              <div className={styles.qaIcon} style={{ color: '#0284c7', backgroundColor: 'rgba(2, 132, 199, 0.1)' }}><Leaf size={28} /></div>
              <h3>Pertanian & Wisata</h3>
              <p>Informasi jadwal panen, penyuluhan, dan destinasi desa wisata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparansi Dana Desa Sneak Peek */}
      <section className={styles.transparencySection}>
        <div className="container">
          <div className={styles.transparencyBox}>
            <div className={styles.tContent}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Transparansi APBDes 2026</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Kami menjamin setiap rupiah dana desa digunakan dengan akuntabel untuk pembangunan dan pemberdayaan masyarakat.</p>
              <button className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Lihat Rincian Laporan</button>
            </div>
            <div className={styles.tStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Pendapatan</span>
                <span className={styles.statValue}>Rp 1.2M</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Pembangunan Infrastruktur</span>
                <span className={styles.statValue}>45%</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Pemberdayaan Masyarakat</span>
                <span className={styles.statValue}>35%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
