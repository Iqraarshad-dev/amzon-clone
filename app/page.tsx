export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", { cache: 'no-store' });
  const products = await res.json();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <h1 className="text-2xl font-bold">amazon-clone</h1>
      </header>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map((product: any) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img 
              src={product.image} 
              alt={product.title}
              className="h-40 w-full object-contain"
            />
            <h2 className="text-sm mt-2 font-semibold line-clamp-2">{product.title}</h2>
            <p className="font-bold mt-1">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}