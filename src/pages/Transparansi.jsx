import React from 'react';
import { PieChart, Activity, CheckSquare } from 'lucide-react';

const Transparansi = () => {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <span style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Keterbukaan Informasi</span>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Transparansi Dana Desa</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Kami berkomitmen untuk mengelola dana dari negara dan masyarakat secara akuntabel, tepat sasaran, dan dapat diawasi bersama.
        </p>
      </div>

      <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary-dark)' }}>Ringkasan APBDes 2026</h2>
          <select style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', outline: 'none' }}>
            <option>Tahun 2026</option>
            <option>Tahun 2025</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'var(--color-bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)' }}>
            <span style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Pendapatan</span>
            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>Rp 1.250.000.000</strong>
          </div>
          <div style={{ backgroundColor: 'var(--color-bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
            <span style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Belanja</span>
            <strong style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Rp 1.100.000.000</strong>
          </div>
          <div style={{ backgroundColor: 'var(--color-bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #3b82f6' }}>
            <span style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Sisa/Silpa</span>
            <strong style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Rp 150.000.000</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            {/* Placeholder for Pie Chart */}
            <div style={{ width: '250px', height: '250px', borderRadius: '50%', background: 'conic-gradient(var(--color-primary) 0% 45%, var(--color-accent) 45% 80%, #3b82f6 80% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '150px', height: '150px', backgroundColor: 'var(--glass-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PieChart size={48} color="var(--color-primary)" opacity={0.5}/>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>Alokasi Belanja Desa</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '12px', height: '12px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>Pembangunan Infrastruktur</div>
                <strong style={{ color: 'var(--color-primary-dark)' }}>45%</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '12px', height: '12px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>Pemberdayaan Masyarakat</div>
                <strong>35%</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '12px', height: '12px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>Operasional Pemerintahan</div>
                <strong>20%</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
          <CheckSquare size={18} /> Unduh Laporan Detail (PDF)
        </button>
      </div>
    </div>
  );
};

export default Transparansi;
