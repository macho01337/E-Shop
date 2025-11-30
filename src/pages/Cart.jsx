
const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">Your Cart</h1>
       <div className="
         bg-white rounded-2x1 shadow-lg
         p-36
         text-center
       ">
        <div className="
            bg-gray-200 border-2 border-dashed 
            rounded-xl w-38 h-38 mx-auto mb-8
          " />
          <p className="text-2xl text-gray-800 mb-4">
            Your cart is currently empty.
          </p>
          <p className="text-gray-700">
            Browse our products and add items to your cart.
          </p>
       </div>
      </div>
    </div>
  )
}

export default Cart
