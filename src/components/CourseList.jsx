import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

const CourseList = () => {
  // const { data } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
 
  const {data, searchTerm} = useSelector((state) => state.courses);
  // console.log(data, searchTerm);
  const filteredCourse = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredCourse);

  const renderedProducts = filteredCourse.map((item) => {
    return (
      <div key={item.id} className="panel">
        <h1>{item.name}</h1>
        <p>{item.discription}</p>
        <p>{item.cost}</p>
        <img src={item.image} alt="photo not found" />
        <button
          className="button is-danger"
          onClick={() => dispatch(removeCourse(item.id))}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedProducts}</div>;
};

export default CourseList;
