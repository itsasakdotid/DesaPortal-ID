import React from 'react';
import { FileText, Send, Clock, CheckCircle } from 'lucide-react';

const Layanan = () => {
  const suratList = [
    'Surat Pengantar RT/RW',
    'Surat Keterangan Domisili',
    'Surat Keterangan Usaha (SKU)',
    'Surat Keterangan Tidak Mampu (SKTM)',
    'Surat Keterangan Belum Menikah'
  ];

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <span style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Layanan Digital</span>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Administrasi Surat</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Ajukan permohonan surat keterangan dari rumah. Proses lebih cepat, transparan, dan dapat dipantau secara langsung.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>Formulir Pengajuan Baru</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Nomor Induk Kependudukan (NIK)</label>
              <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} placeholder="16 Digit NIK Anda" />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Jenis Surat</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                {suratList.map((surat, idx) => <option key={idx}>{surat}</option>)}
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Keperluan Pengajuan</label>
              <textarea rows="3" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', resize: 'vertical' }} placeholder="Tuliskan tujuan pembuatan surat..."></textarea>
            </div>
            
            <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              <Send size={18} /> Ajukan Permohonan
            </button>
          </form>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>Alur Pengajuan</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(21, 128, 61, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FileText size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>1. Isi Formulir</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Lengkapi data pada form di samping dengan NIK yang valid dan sesuai KTP.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(234, 88, 12, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>2. Proses Verifikasi</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Perangkat desa akan memverifikasi data Anda. Estimasi waktu 1x24 jam di hari kerja.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>3. Ambil Surat</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Anda akan menerima notifikasi via WhatsApp/SMS saat surat telah dicetak dan siap diambil di Balai Desa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
