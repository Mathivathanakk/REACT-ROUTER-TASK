import React from "react";

const Cards = ({ element }) => {
  return (
    
      <div className="col" key={element.id}>
        <div className="card" >
          <img src={element.image} alt="image" />
          <div className="card-body">
            <div className="card-title fw-bold fs-4">{element.title}</div>
            <div className="card-subTitle text-secondary">{element.author}</div>
            <div className="card-text text-secondary ">{element.date}</div>
          </div>
        </div>
      </div>
      
  );
};

export default Cards;
