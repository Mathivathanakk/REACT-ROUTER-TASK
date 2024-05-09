import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/all");
  };
  return (
    <>
      <div className="button">
        <button className="btn btn-primary px-5 m-" onClick={handleSubmit}>
          LEARN MORE
        </button>
      </div>

      <div className="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi96JrnFad5OjQ1Lr3aNs5JY1Hkd1tkuwFQg&s"
          alt="image"
        />
      </div>
    </>
  );
};

export default Courses;
