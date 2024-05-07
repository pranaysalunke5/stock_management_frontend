import React, { useState, useEffect } from "react";
import Select from "react-select";

const Practice = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const url = "http://localhost:5000/api/products/getAll";

  return (
    <>
      <div className="w-full relative p-4 flex flex-col gap-4">
        <div className="flex justify-between bg-gray-50">
          <p className="text-[16px] font-semibold">All Users </p>
          <div className="flex justify-between w-[14%] gap-3 items-center">
            <button className="bg-white p-2 rounded-[4px] ">Filters</button>
            <button
              className="bg-blue-500 p-2 rounded-[4px] text-white"
              onClick={togglePopup}
            >
              Add New User
            </button>
          </div>
        </div>

        <div className="shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50  dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  TYPE
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  UNIT
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  PRICE
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  UPDATE
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b  ">
                <td className="w-4 p-4"></td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Name
                </th>
                <td className="px-6 py-4 text-gray-900 "> sku</td>
                <td className="px-6 py-4 text-gray-900 "> type</td>
                <td className="px-6 py-4 text-gray-900 ">unit</td>
                <td className="px-6 py-4 text-gray-900 ">price</td>

                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit  
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl flex flex-col gap-4 w-[30%] ">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[18px]">Add Product</p>

                <button
                  onClick={togglePopup}
                  className="bg-white px-3 py-1 rounded-md w-[15%] flex justify-end"
                >
                  <img src="/images/cross.png" alt="" className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <Select />
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex justify-between items-center w-full">
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800  focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Practice;
