import React from 'react';
import { Users, History, Compass } from 'lucide-react';

const Profil = () => {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <span style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Profil Desa</span>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Desa Makmur</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Berdiri sejak tahun 1930, Desa Makmur terus berkembang menjadi desa wisata dan pusat kerajinan yang ramah lingkungan.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-primary)' }}>
          <History size={36} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Sejarah Desa</h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
            Awalnya merupakan perkumpulan petani kecil, desa ini berevolusi menjadi pusat pertanian organik berkat kearifan lokal yang terjaga secara turun-temurun.
          </p>
        </div>

        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-accent)' }}>
          <Compass size={36} color="var(--color-accent)" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Visi & Misi</h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '0.5rem' }}>
            <strong>Visi:</strong> Terwujudnya Desa Makmur yang Sejahtera, Agamis, dan Berbudaya Lingkungan.
          </p>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
            <strong>Misi:</strong> Meningkatkan kualitas hasil tani, mendorong ekonomi kreatif warga, dan menjaga kelestarian alam.
          </p>
        </div>
      </div>

      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)' }}>Perangkat Desa</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {[
          { name: 'Bpk. Supriyanto', role: 'Kepala Desa' },
          { name: 'Ibu Siti Aminah', role: 'Sekretaris Desa' },
          { name: 'Bpk. Budi Santoso', role: 'Kaur Keuangan' },
          { name: 'Bpk. Ahmad', role: 'Kasi Pemerintahan' }
        ].map((person, index) => (
          <div key={index} className="text-center">
            <div style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(21, 128, 61, 0.1)',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid white',
              boxShadow: 'var(--shadow-md)'
            }}>
              <Users size={64} color="var(--color-primary)" opacity={0.5} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-main)' }}>{person.name}</h3>
            <span style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>{person.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profil;
