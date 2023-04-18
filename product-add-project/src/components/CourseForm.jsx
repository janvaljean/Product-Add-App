import React from "react";

const CourseForm = () => {
  return (
    <div className="courseForm panel">
      <h4 className="subTitle is-3">Add Product</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input className="input is-expanded" />
          </div>
          <div className="field">
            <label className="label">Description</label>
            <textarea className="input is-expanded" />
          </div>
          <div className="field">
            <label className="label">Price</label>
            <input className="input is-expanded" typeof="number" />
          </div>
          <div className="field">
            <label className="label">Image</label>
            <input className="input is-expanded" />
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
