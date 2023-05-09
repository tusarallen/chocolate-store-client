/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
  const chocolates = useLoaderData();
  console.log(chocolates);

  const { _id, name, country, category, photo } = chocolates;

  const handleUpdatedChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const updatedChocolate = {name, country, category, photo };

    // send data to the server
    fetch(`http://localhost:5000/updateChocolate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
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
        <form onSubmit={handleUpdatedChocolate}>
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
                  defaultValue={name}
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
                  defaultValue={country}
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
                  defaultValue={category}
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
                    defaultValue={photo}
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Update Chocolate"
            className="btn bg-gradient-to-br from-orange-500 to-yellow-900 text-white w-11/12 mb-7"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateChocolate;
