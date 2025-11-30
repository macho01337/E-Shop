const ProductCard = ({product}) => {
  return (
    <div className="
        group
      bg-white
        rounded-xl
        shadow-lg
        overflow-hidden
        hover:shadow-2xl
        hover:scale-100
     ">
    <div className="
        relative overflow-hidden
        "> 
        <img 
        src={product.image}
        alt={product.title}
        className="w-full h-76
        object-cover
        group-hover:scale-110
      "/>
      <div className="
      absolute inset-0
      bg-black
      opacity-0
      group-hover:opacity-20
      "/>
    </div>
    <div className="p-3">
        <h3 className="
        text-lg font-semibold text-gray-900
        mb-2
        line-clamp-2   
        ">
            {product.title}
        </h3>
        <div className="flex justify-between items-end mt-6">
            <p className="text-2xl font-bold text-gray-900">
                ${product.price}
            </p>
            <button className="
              bg-blue-600 text-white
                px-5 py-2
                rounded-lg
             hover:bg-blue-700
              active:scale-95
              transition-all duration-200
      ">Add to Cart</button>
        </div>
    </div>

    </div>
  )
}

export default ProductCard
