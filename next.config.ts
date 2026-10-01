import Image from "next/image";

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', { 
    cache: 'no-store' 
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="grid grid-cols-4 gap-4 p-4 bg-gray-100 min-h-screen">
      {products.map((product: any) => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="h-40 object-contain mx-auto"
            unoptimized
          />
          <h2 className="font-bold text-sm mt-2 line-clamp-1">{product.title}</h2>
          <p className="text-green-700 font-bold">${product.price}</p>
          <button className="bg-yellow-400 w-full rounded-full py-1 mt-2 text-sm">Add to Cart</button>
        </div>
      ))}
    </main>
  );
}