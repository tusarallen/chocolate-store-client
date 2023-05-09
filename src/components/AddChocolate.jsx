/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddChocolate = () => {
  const handleAddChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const updatedChocolate = { name, country, category, photo };
    console.log(updatedChocolate);

    // send data to the server
    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-[white] p-24 text-center">
      <h2 className="text-3xl font-extrabold  md:mb-16 bg-gradient-to-br from-orange-500 to-yellow-900 text-white p-1 w-1/2 mx-auto rounded-md ">
        Chocolate Management System
      </h2>
      <Link to="/">
        <button className="font-bold text-[gray] flex items-center gap-4">
          <FaArrowLeft></FaArrowLeft> All Chocolates
        </button>
      </Link>
      <hr className="bg-gray border mt-12 mb-8" />
      <div className="bg-[#1414140D]">
        <form onSubmit={handleAddChocolate}>
          {/* form name and quantity row */}
          <div className="p-24">
            <h2 className="md:-mt-16 font-bold text-2xl">New Chocolates</h2>
            <p className="text-[gray] mb-4 mt-3">
              Use the below form to create a new product
            </p>
            <div className="form-control md:w-full mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Hot Pink Chocolate"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="country"
                  placeholder="Enter Country Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Premium"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form Photo URL row */}
            <div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>
            <input
              type="submit"
              value="Save"
              className="btn bg-gradient-to-br from-orange-500 to-yellow-900 text-white w-11/12 mb-7"
            />
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
