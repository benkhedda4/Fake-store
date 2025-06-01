function ProductList({ products }) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition bg-white">
            <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain mb-2" />
            <h4 className="font-semibold text-sm border-t">{product.title}</h4>
            <p className="text-green-600 font-bold">${product.price}</p>
            <p className="text-yellow-500 text-sm">⭐ {product.rating?.rate}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  