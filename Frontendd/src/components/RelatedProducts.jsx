import React from "react";
import Card from "../Card/Card.jsx";

const RelatedProducts = ({ id, category }) => {
  const displayItems = [1, 2, 3];

  return (
    <div className="slider-container mx-auto md:px-8 lg:px-16 my-10">
      {displayItems.length > 0 ? (
        <div>
          {displayItems.map((item, index) => (
            <div
              className="pl-2"
              key={index}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Card
                id={item._id}
                title={item.name}
                description={item.description}
                price={item.price}
                images={item.images}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No related products available.
        </p>
      )}
    </div>
  );
};

export default RelatedProducts;
