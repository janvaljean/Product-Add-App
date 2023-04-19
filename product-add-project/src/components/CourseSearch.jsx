import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store/slices/courseSlice';

const CourseSearch= () => {
   const dispatch = useDispatch();

  return (
    <div className="listHeader">
      <h3 className="title is-3">Products</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input className="input" onChange={(e) => dispatch(changeSearchTerm(e.target.value))} />
      </div>
    </div>
  ); 
}

export default CourseSearch;
