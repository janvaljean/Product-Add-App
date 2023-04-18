import React from "react";
import { useSelector } from "react-redux";
import image from "../assets/download.png";

const CourseList = () => {
  const { data } = useSelector((state) => state.courses);
  const renderedProducts = data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.discription}</p>
            <p>{item.cost}</p>
            <img src={item.image} alt="photo not found" />
            <button className="button is-danger">Delete</button>
          </div>
        );
      })
  return (
    <div className="courseList">
    {renderedProducts}
    </div>
  );
};

export default CourseList;
