import React from "react";
import Cards from "../Components/Cards";

const FullStack = ({ data }) => {
  const fsdData = data.filter((result) => result.topic === "fsd");
  return (
    <div className="container">
      <div className="row  row-cols-1 row-cols-md-3  justify-content-center g-4 mt-3 p-5">
        {fsdData.map((element, index) => {
          return <Cards element={element} key={element.id} />;
        })}
      </div>
    </div>
  );
};

export default FullStack;
