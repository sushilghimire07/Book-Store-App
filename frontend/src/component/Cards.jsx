import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-10 mb-10 px-4 flex justify-center">
      <div
        className="
          w-full max-w-xs
          bg-base-100
          text-base-content
          rounded-xl overflow-hidden border
          border-gray-200 dark:border-gray-700
          shadow-md
          transition-all duration-300
          hover:shadow-xl hover:scale-105
        "
      >
        {/* Image */}
        <figure className="w-full h-56 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <div className="badge badge-secondary mt-2">{item.category}</div>
            <p className="text-sm mt-4">{item.title}</p>
          </div>

          {/* Price and Buy Now */}
          <div className="flex justify-between items-center mt-6">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 text-xs rounded-full border-2 hover:bg-pink-500 hover:text-white duration-300">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
