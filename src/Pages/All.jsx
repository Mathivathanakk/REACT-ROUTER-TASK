import React from "react";
import Cards from "../Components/Cards";

const All = ({ data }) => {
  return (
    <div className="container">
      <div className="row  row-cols-1 row-cols-md-3  justify-content-center g-4 mt-3 p-5">
        {data.map((element, index) => {
          return <Cards element={element} key={element.id} />;
        })}
      </div>
    </div>
  );
};

export default All;
