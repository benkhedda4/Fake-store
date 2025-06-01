function FilterBar({ categories, onFilter, onSort }) {
    return (
      <div className="flex flex-wrap gap-2 items-center justify-center mb-6">
        <button onClick={() => onFilter('all')} className="bg-blue-500 text-white px-3 py-1 rounded">All</button>
        {categories.map(cat => (
          <button key={cat} onClick={() => onFilter(cat)} className="bg-gray-200 px-3 py-1 rounded hover:bg-blue-500 capitalize">
            {cat}
          </button>
        ))}
        <select onChange={(e) => onSort(e.target.value)} className="ml-4 p-2 border rounded">
          <option value="">Sort by</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
  
  export default FilterBar;
  