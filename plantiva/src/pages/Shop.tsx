import { ShoppingCart, Star } from 'lucide-react';

export default function Shop() {
  const products = [
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      price: '$45.00',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=400',
      tag: 'Popular',
    },
    {
      id: 2,
      name: 'Monstera Deliciosa',
      price: '$35.00',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400',
      tag: 'Easy Care',
    },
    {
      id: 3,
      name: 'Snake Plant (Laurentii)',
      price: '$28.00',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400',
      tag: 'Best Seller',
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Botanical Marketplace</h1>
          <p className="text-emerald-300/70">Shop premium houseplants, organic seeds, and gardening tools.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group rounded-3xl bg-emerald-900/10 border border-emerald-800/20 overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500 text-emerald-950">
                  {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="text-emerald-400 font-extrabold">{product.price}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400 mb-6">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold text-emerald-300">{product.rating}</span>
                </div>
                <button className="w-full py-3 rounded-xl bg-emerald-800/40 hover:bg-emerald-500 hover:text-emerald-950 transition-all font-semibold flex items-center justify-center gap-2 border border-emerald-700 hover:border-transparent">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
