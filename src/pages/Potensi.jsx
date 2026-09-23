import React from 'react';
import { Store, Camera, ShoppingBag, Map } from 'lucide-react';

const Potensi = () => {
  const umkmList = [
    { title: 'Kopi Organik Makmur', desc: 'Kopi robusta asli dari lereng gunung yang diolah secara tradisional tanpa bahan kimia.', price: 'Mulai Rp 45.000', category: 'Kuliner' },
    { title: 'Kerajinan Anyaman Bambu', desc: 'Berbagai macam produk alat rumah tangga dan suvenir estetik dari bambu pilihan.', price: 'Mulai Rp 20.000', category: 'Kerajinan' },
    { title: 'Beras Merah Desa', desc: 'Beras merah kaya serat langsung dari petani lokal, cocok untuk diet sehat.', price: 'Rp 15.000 / Kg', category: 'Pertanian' },
  ];

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <span style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Potensi Lokal</span>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>UMKM & Pariwisata</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Dukung pergerakan ekonomi desa dengan membeli produk unggulan warga dan kunjungi destinasi wisata alam kami.
        </p>
      </div>

      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Store size={32} color="var(--color-accent)" /> Etalase UMKM
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {umkmList.map((item, idx) => (
            <div key={idx} className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ height: '200px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShoppingBag size={48} color="var(--color-text-muted)" opacity={0.5} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ backgroundColor: 'rgba(234, 88, 12, 0.1)', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700' }}>
                  {item.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{item.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-primary-dark)' }}>{item.price}</span>
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Beli/Pesan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Map size={32} color="var(--color-primary)" /> Destinasi Wisata
        </h2>
        <div className="glass" style={{ display: 'flex', flexWrap: 'wrap', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ flex: '1 1 300px', height: '300px', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Camera size={64} color="var(--color-text-muted)" opacity={0.5} />
          </div>
          <div style={{ flex: '1 1 400px', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Air Terjun Curug Bidadari</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Wisata alam unggulan desa dengan udara sejuk dan pemandangan hutan pinus. Cocok untuk liburan keluarga di akhir pekan. Tiket masuk sudah termasuk asuransi dan dikelola langsung oleh BUMDes.
            </p>
            <button className="btn btn-accent" style={{ alignSelf: 'flex-start' }}>Lihat Peta Lokasi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potensi;
