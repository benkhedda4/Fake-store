import { useEffect, useState } from 'react';
import axios from 'axios';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(res.data);
      setDisplayed(res.data);
    });
    axios.get('https://fakestoreapi.com/products/categories').then(res => setCategories(res.data));
  }, []);

  const handleFilter = (category) => {
    setDisplayed(category === 'all' ? products : products.filter(p => p.category === category));
  };

  const handleSort = (type) => {
    const sorted = [...displayed];
    if (type === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (type === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else if (type === 'rating') sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    setDisplayed(sorted);
  };

  return (
    <div className="p-4 bg-[#FFDDD3]">
      <h1 className="text-3xl font-bold mb-4 text-center">🛍️ FakeStore Shop</h1>
      <FilterBar categories={categories} onFilter={handleFilter} onSort={handleSort} />
      <ProductList products={displayed} />
    </div>
  );
}

export default App;
