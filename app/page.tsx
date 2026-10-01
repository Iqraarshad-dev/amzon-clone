"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Amazon Clone LIVE</h1>
      <p>Build Fixed Successfully - Products Below</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <img src={p.image} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
            <h3 style={{ fontSize: '14px', marginTop: '10px' }}>{p.title.slice(0, 50)}...</h3>
            <p style={{ fontWeight: 'bold', color: 'green' }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}