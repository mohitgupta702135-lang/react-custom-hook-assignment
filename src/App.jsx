import React from 'react';
import useFetch from './useFetch';

const App = () => {
  
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-center mb-10">Products</h1>

      
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="text-xl animate-pulse">Loading...</div>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500 text-lg font-semibold border border-red-500 p-4 rounded bg-red-900 bg-opacity-20">
            {error}
          </div>
        </div>
      )}

      {!loading && !error && data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {data.slice(0, 20).map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300 flex flex-col"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover bg-gray-800"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600?text=Image+Not+Found';
                }}
              />
              <div className="p-4 flex-row flex items-center justify-center text-center">
                <p className="text-sm text-gray-300 line-clamp-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;