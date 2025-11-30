import products from "../data/products.js";
import ProductCard from "../components/products/ProductCard.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="
         text-4xl
         sm:text-5xl
         font-extrabold
       text-gray-900
         text-center
         mb-12
         ">
          The best products in 2025</h1>
         <div className="
         grid
         grid-cols-1
         sm:grid-cols-2
         lg:grid-cols-3
         gap-6
         lg:gap-8
         " >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
         </div>
      </div>  
    </div>
  )
}

export default Home
