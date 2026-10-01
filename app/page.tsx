export default function Home() {
  return (
    <main style={{ padding: 20, background: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Amazon Clone - LIVE ✅</h1>
      <p style={{ textAlign: 'center', marginTop: 10 }}>Site is working now!</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 20 }}>
        <div style={{ background: 'white', padding: 10, borderRadius: 8 }}>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style={{ height: 100, margin: 'auto' }} />
          <p>Backpack - $109</p>
        </div>
        <div style={{ background: 'white', padding: 10, borderRadius: 8 }}>
          <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" style={{ height: 100, margin: 'auto' }} />
          <p>T-Shirt - $22</p>
        </div>
      </div>
    </main>
  );
}