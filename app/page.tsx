"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // zyada reliable API use kar rahe hain
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(0, 12)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Amazon Clone LIVE</h1>
      <p>Build Fixed Successfully - Products Below</p>
      
      {products.length === 0 && <p>Loading products...</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '8px', background: 'white' }}>
            <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: '180px', objectFit: 'contain' }} />
            <h3 style={{ fontSize: '14px', marginTop: '10px', height: '35px', overflow: 'hidden' }}>{p.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#B12704', marginTop: '5px' }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}