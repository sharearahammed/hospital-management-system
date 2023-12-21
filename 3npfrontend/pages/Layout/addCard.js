import { useState } from 'react';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.name === item.name && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCart.filter((cartItem) => cartItem.quantity > 0));
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-yellow-300 to-pink-500">
      <nav className="bg-purple-800 p-4 mb-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Medicine Shopping Cart</h1>
          <div className="text-sm">
            <span className="mr-2 text-gray-300">Cart Items: {cartItems.length}</span>
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
              onClick={() => setCartItems([])}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Product 1 */}
            <div className="border p-4 flex flex-col items-center justify-between bg-white rounded-md shadow-md hover:shadow-lg transition duration-300">
              <span className="text-lg font-semibold mb-2 text-purple-700"><img src="https://renata-ltd.com/wp-content/uploads/2015/03/Pharmaceuticals-Fenadin-Suspension.jpg"></img>Fenadin</span>
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none transition duration-300"
                onClick={() => addToCart({ name: 'Fenadin' })}
              >
                Add to Cart
              </button>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
                  onClick={() => removeFromCart({ name: 'Fenadin' })}
                >
                  -
                </button>
                <span className="font-semibold">
                  {(cartItems.find((item) => item.name === 'Fenadin')?.quantity) || 0}
                </span>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
                  onClick={() => addToCart({ name: 'Fenadin' })}
                >
                  +
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="border p-4 flex flex-col items-center justify-between bg-white rounded-md shadow-md hover:shadow-lg transition duration-300">
              <span className="text-lg font-semibold mb-2 text-purple-700"><img src="https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20230927-WA0217.jpg&w=750&q=75"></img>Reversair 5 </span>
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none transition duration-300"
                onClick={() => addToCart({ name: 'Reversair 5' })}
              >
                Add to Cart
              </button>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
                  onClick={() => removeFromCart({ name: 'Reversair 5' })}
                >
                  -
                </button>
                <span className="font-semibold">
                  {(cartItems.find((item) => item.name === 'Reversair 5')?.quantity) || 0}
                </span>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
                  onClick={() => addToCart({ name: 'Reversair 5' })}
                >
                  +
                </button>
              </div>
            </div>
            {/* Product 3 */}
            <div className="border p-4 flex flex-col items-center justify-between bg-white rounded-md shadow-md hover:shadow-lg transition duration-300">
              <span className="text-lg font-semibold mb-2 text-purple-700"><img src="https://epharma.com.bd/storage/app/public/Ca9JunJSzzBeTPOqFjcBc6we5K36hiKXaym4GoF9.webp"></img>Product 3</span>
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none transition duration-300"
                onClick={() => addToCart({ name: 'Nebanol' })}
              >
                Add to Cart
              </button>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
                  onClick={() => removeFromCart({ name: 'Nebanol' })}
                >
                  -
                </button>
                <span className="font-semibold">
                  {(cartItems.find((item) => item.name === 'Nebanol')?.quantity) || 0}
                </span>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none transition duration-300"
                  onClick={() => addToCart({ name: 'Nebanol' })}
                >
                  +
                </button>
              </div>
            </div>
            {/* Add more products */}
          </div>
        </div>

        {/* Cart */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Shopping Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border p-2 mb-2 flex justify-between items-center bg-gray-100 rounded-md"
              >
                <span className="font-semibold text-purple-700">{item.name}</span>
                <span className="font-semibold text-purple-700">Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
