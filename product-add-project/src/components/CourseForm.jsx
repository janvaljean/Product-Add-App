import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDiscription,
  changeImage,
  changeName,
  changePrice,
} from "../store/slices/formSlice";

const CourseForm = () => {
  const dispatch = useDispatch();
  const { name, discription, cost, image } = useSelector((store) => store.form);
  return (
    <div className="courseForm panel">
      <h4 className="subTitle is-3">Add Product</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              onChange={(e) => dispatch(changeName(e.target.value))}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Description</label>
            <textarea
              className="input is-expanded"
              onChange={(e) => dispatch(changeDiscription(e.target.value))}
              value={discription}
            />
          </div>
          <div className="field">
            <label className="label">Price</label>
            <input
              className="input is-expanded"
              typeof="number"
              onChange={(e) => dispatch(changePrice(parseInt(e.target.value)))}
              value={cost}
            />
          </div>
          <div className="field">
            <label className="label">Image</label>
            <input
              className="input is-expanded"
              onChange={(e) => dispatch(changeImage(e.target.value))}
              value={image}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
