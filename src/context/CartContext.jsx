import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";

export const CartContext = createContext();


 const initialState = {
    cart: [],
 };

 const cartReducer = (state, action) => {
    switch (action.type) {
         case "ADD_TO_CART": {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
   
       if (itemInCart) {
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
         ),
      };
       } else {
        return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
     } 
    }
    
    case "INCREASE":
     return {
        ...state,
    cart: state.cart.map(item => 
        item.id === action.payload
        ? { ...item, quantity: item.quantity + 1 }
        : item
      )
    };

    case "DECREASE":
        return {
        ...state,
        cart: state.cart
        .map(item =>
            item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0),
     };

    case "REMOVE_FROM_CART":
    return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
    };

   case "CLEAR_CART":
    return {
        ...state,
        cart: [],
    }
default:
    return state;
    }


 }

export const CartProvider = ({ children }) => {
        const [state, dispatch] = useReducer(cartReducer, initialState);
    
    
     const addToCart = (product) => dispatch({type: "ADD_TO_CART", payload: product})
        const increase = (id) => dispatch({type: "INCREASE", payload: id})
        const decrease = (id) => dispatch({type: "DECREASE", payload: id})
        const removeFromCart = (id) => dispatch({type: "REMOVE_FROM_CART", payload: id})
        const clearCart = () => dispatch({type: "CLEAR_CART"})



const totalItems = state.cart.reduce((sum,item) => sum + item.quantity, 0);
const totalPrice = state.cart.reduce((sum,item) => sum + item.price * item.quantity, 0);


useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
 }, [state.cart]);

 return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);