import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import { Link } from  'react-router-dom';

const Cart = () => {
  const {cart, totalPrice, totalItems, clearCart} = useCart();
   
  // ===== Handle empty cart ===== 
  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="bg-white rounded-2x1 shadow-x1 p-16 text-center max-w-md">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-8" />
          <h1 className="text-3x1 font-bold text-gray-800 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add products and get back here</p>
          <Link to="/" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition">
            Go to shop
          </Link>
        </div>
      </div>
    );
  }
 
  // ===== Cart with items =====
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
          Your cart ({totalItems} {totalItems === 1 ? "product" : "products"})
        </h1>

        <div className="space-y-6 mb-10">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="bg-white rounded-2x1 shadow-x1 p-6 sticky bottom-t-4 border-indigo-600 border-2 border-rounded-lg">
          <div className="flex justify-beetween items-center mb-6">
            <span className="text-2x1 font-semibold text-gray-700">Total:</span>
            <span className="
            text-4x1 font-bold text-indigo-600">${totalPrice}</span>
          </div>

          <div className="flex gap-4">
            <button onClick={clearCart} className="flex-1 bg-red-600 text-white py-4 rounded-lg font-medium hover:bg-red-700 active:scale-95">
              Delete Cart
            </button>

            <button className="flex-1 bg-indigo-600 text-white py-4 rounded-lg font-medium hover:bg-indigo-800">
              Finish your order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
