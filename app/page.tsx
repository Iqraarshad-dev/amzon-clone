export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#131921] text-white p-3 flex items-center gap-4">
        <h1 className="text-2xl font-bold">amazon</h1>
        <div className="flex-1 flex">
          <input 
            className="flex-1 p-2 text-black rounded-l-md" 
            placeholder="Search Amazon"
          />
          <button className="bg-[#febd69] px-4 rounded-r-md text-black font-bold">Search</button>
        </div>
        <div className="flex gap-4">
          <span>Hello, Iqra</span>
          <span className="font-bold">Cart 🛒 0</span>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-[#232f3e] text-white p-2 flex gap-4 text-sm">
        <span>All</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Gift Cards</span>
        <span>Sell</span>
      </div>

      {/* Products */}
      <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow hover:shadow-lg">
            <div className="bg-gray-200 h-40 mb-2 flex items-center justify-center">Product Image {item}</div>
            <h3 className="font-bold">Product {item}</h3>
            <p className="text-sm text-gray-600">High quality product</p>
            <p className="font-bold text-lg mt-1">$29.99</p>
            <button className="bg-[#ffd814] w-full mt-2 p-1 rounded-full text-sm">Add to Cart</button>
          </div>
        ))}
      </main>
      
      <footer className="bg-[#131921] text-white text-center p-4 mt-4">
        <p>Made with ❤️ by Iqra - Amazon Clone</p>
      </footer>
    </div>
  );
}