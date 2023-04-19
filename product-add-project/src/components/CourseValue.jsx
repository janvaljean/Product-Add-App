import React from "react";
import { useSelector } from "react-redux";

const CourseValue = () => {
  const { data, searchTerm } = useSelector((state) => state.courses);
  const filteredCourse = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredCourse);

  let totalPrice = 0
  
  filteredCourse.forEach((item) => totalPrice += item.cost)

  return <div className="coursePrice">Total:{totalPrice}</div>;
};

export default CourseValue;
