import React from "react";
import Cards from "../Components/Cards";

const CyberSecurity = ({ data }) => {
  const cybersecurity = data.filter(
    (result) => result.topic === "cybersecurity"
  );
  return (
    <div className="container">
      <div className="row  row-cols-1 row-cols-md-3  justify-content-center g-4 mt-3  p-5">
        {cybersecurity.map((element, index) => {
          return <Cards element={element} key={element.id} />;
        })}
      </div>
    </div>
  );
};

export default CyberSecurity;
