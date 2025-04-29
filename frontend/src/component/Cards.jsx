import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-10 mb-10 px-4 flex justify-center">
      <div className="w-full max-w-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-white
       rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all 
       duration-300 hover:shadow-xl hover:scale-105">
        {/* Image */}
        <figure className="w-full h-56 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </figure>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <div className="badge badge-secondary mt-2">{item.category}</div>
            <p className="text-sm mt-4">{item.title}</p>
            <div className="text-lg font-bold text-blue-500 dark:text-blue-400">
              {item.price === 0 ? "Free" : `$${item.price}`}
            </div>
            <div>
            <button className="px-3  mt-2 mb-1 py-1 text-sm font-semibold rounded-full border-2
             border-blue-500 text-pink-500 hover:bg-pink-500 hover:text-white transition">
              Buy Now
            </button>
            </div>
          </div>
            
          </div>
        </div>
      </div>
  );
}

export default Cards;
