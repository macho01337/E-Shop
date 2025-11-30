import { ShoppingCart, Store} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
 const { totalItems } = useCart();

   return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
     <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Store size={36} className="text-blue-500 mr-2"/>
            </Link>
            <span className="font-bold text-xl text-gray-800">E-SHOP</span>
            <Link 
            to="/cart" 
            className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <ShoppingCart size={32} className="text-gray-700 absolute bottom-0.4 right-4" />
            { totalItems > 0 && (
                <span className="absolute top-1 right-0
                 bg-red-500 text-white 
                 rounded-full text-xs
                  w-6 h-6 flex items-center justify-center
                  ">
                {totalItems}
                </span>
                    )}
            </Link>
        </div>
     </div>
    </header>
  )
}

export default Navbar
