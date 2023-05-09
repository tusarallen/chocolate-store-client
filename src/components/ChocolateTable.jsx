/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaEdit, FaEye, FaPlus, FaRegMinusSquare } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateTable = () => {
  const loadedchocolate = useLoaderData();
  const [chocolate, setChocolate] = useState(loadedchocolate);

  const handleChocolateDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your chocolate has been deleted.",
                "success"
              );
              const remaining = chocolate.filter((choco) => choco._id !== _id);
              setChocolate(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[white] pt-8 text-center">
      <h2 className="text-3xl font-extrabold  md:mb-16 bg-gradient-to-br from-orange-500 to-yellow-900 text-white p-1 w-1/2 mx-auto rounded-md ">
        Chocolate Management System
      </h2>
      <Link to="/addChocolate">
        <button className="font-bold text-[gray] flex items-center gap-4 md:ml-28 mb-6">
          <FaPlus></FaPlus> New Chocolate
          <img
            className="w-7 h-5"
            src="https://i.ibb.co/fpgt60S/image.png"
            alt=""
          />
        </button>
      </Link>

      <div className="overflow-x-auto w-full">
        <table className="table w-10/12 mx-auto">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Country</th>
              <th>Category</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          {chocolate?.map((snicker) => (
            <tbody key={snicker._id}>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={snicker.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{snicker.name}</td>
                <td>{snicker.country}</td>
                <tr>
                  <td>{snicker.category}</td>
                </tr>

                <td>
                  <div className="flex gap-4">
                    <Link to={`updateChocolate/${snicker._id}`}>
                      <div style={{ fontSize: "25px" }}>
                        <FaEdit></FaEdit>
                      </div>
                    </Link>
                    <button
                      onClick={() => handleChocolateDelete(snicker._id)}
                      style={{ fontSize: "25px" }}
                    >
                      <FaRegMinusSquare></FaRegMinusSquare>
                    </button>
                  </div>
                </td>
              </tr>
              <hr className="bg-gray border my-2 max-w-full" />
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ChocolateTable;
