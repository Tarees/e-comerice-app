import React from "react";
const CategorySection = () => {
  const category = [
    {
      title: "Men",
      image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Women",
      image:"https://plus.unsplash.com/premium_photo-1689575249162-beed0ac1f015?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Kids",
      image: "https://images.unsplash.com/photo-1483193722442-5422d99849bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {category.map((item, index) => (
        <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <img src={item.image} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
          <div className="absolute top-1/2 left-15 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-white">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
