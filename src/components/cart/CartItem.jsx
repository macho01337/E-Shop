import { useCart } from '../../context/CartContext';
import { Trash } from 'lucide-react';

const CartItem = ({item}) => {
  const { increase , decrease , removeFromCart } = useCart();
  return (
    <div className="
    flex items-center gap-6
    bg-white
    rounded-xl
    shadow-md
    p-6
    hover:shadow-lg
    transition-shadow duration-300
    border border-gray-100
    ">
        <img src={item.image} alt={item.title} className="
        w-28 h-28
        object-cover
        rounded-lg
        border border-gray-200" 
        />
    <div className="flex-1 min-w-0">
        <h3 className="
        text-lg font-semibold
        text-gray-800 
        truncate">
           {item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          ${item.price} 
        </p>
      </div>
    {/* Quantity */}
    <div className="
    flex items-center gap-3
    border border-gray-300
    rounded-lg
    overflow-hidden">
        <button onClick={() => decrease(item.id)} className="
        w-10 h-10
        bg-gray-100
        hover:bg-gray-200
        active:bg-gray-300
        flex items-center justify-center
        transition-colors
        ">-</button>
        <span className="
        w-12 text-center
        font-medium text-gray-900">{item.quantity}</span>
        <button onClick={() => increase(item.id)} className="
        w-10 h-10
        bg-indigo-600 text-white
        hover:bg-indigo-700
        active:bg-indigo-800
        flex items-center justify-center
        transition-colors">+</button>
    </div>

    {/* Subtotal */}
     <div className="text-right">
      <p className="
      text-xl font-bold text-indigo-600">Subtotal: ${(item.price * item.amount).toFixed(2)}</p>
      </div>
    {/* Remove button */}
        <button onClick={() => removeFromCart(item.id)} className="
        p-3
        text-red-600
        hover:bg-red-50
        rounded-lg
        transition-colors
        ml-4
        ">
        <Trash size={26} />
     </button>
    </div>
  )
}

export default CartItem
