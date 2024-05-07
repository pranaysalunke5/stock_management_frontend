import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from 'axios';

const Products = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
     axios.get('https://freedygoservices.in/api/product/getAll')
     .then(res => {setAllProducts(res.data)})
     .catch(err => console.log(err) )
  },[])

  return (
    <>
      <div className="w-full relative  p-4 flex flex-col gap-4">
        <div className="flex justify-between bg-gray-50">
          <p className="text-[16px] font-semibold">All Users 127</p>
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

        <div class=" shadow-md sm:rounded-lg w-full">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-500 uppercase bg-gray-50  dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-900 ">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3 text-gray-900 ">
                  SKU
                </th>
                <th scope="col" class="px-6 py-3 text-gray-900 ">
                  TYPE
                </th>
                <th scope="col" class="px-6 py-3 text-gray-900 ">
                  QTY
                </th>
                <th scope="col" class="px-6 py-3 text-gray-900 ">
                  UNIT
                </th>
                <th scope="col" class="px-6 py-3 text-gray-900 ">
                  PRICE
                </th>
                <th scope="col" class="px-6 py-3 text-gray-900 ">
                  UPDATE
                </th>
              </tr>
            </thead>
            {
               allProducts.map((product,index) => {
                <tr key={index} className="bg-white border-b  ">
                <td className="w-4 p-4"></td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {product.label}
                </th>
                <td className="px-6 py-4 text-gray-900 ">{product.sku}</td>
                <td class="px-6 py-4 text-gray-900 ">{product.type}</td>
                <td class="px-6 py-4 text-gray-900 ">{product.unit}</td>
                <td class="px-6 py-4 text-gray-900 ">{product.basePrice}</td>
                <td class="flex items-center px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
               }) 
            }
            {/* <tbody>
              {allProducts.map((product, index) => (
                <tr key={index} className="bg-white border-b  ">
                  <td className="w-4 p-4"></td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {product.label}
                  </th>
                  <td className="px-6 py-4 text-gray-900 ">{product.sku}</td>
                  <td class="px-6 py-4 text-gray-900 ">{product.type}</td>
                  <td class="px-6 py-4 text-gray-900 ">{product.unit}</td>
                  <td class="px-6 py-4 text-gray-900 ">{product.basePrice}</td>
                  <td class="flex items-center px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
            </tbody> */}
            <tbody>
    {/* {allProducts.map((product,index) => (
        <tr key={product} className="bg-white border-b">
            <td className="w-4 p-4"></td>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                {product.label}
            </th>
            <td className="px-6 py-4 text-gray-900">{product.sku}</td>
            <td className="px-6 py-4 text-gray-900">{product.type}</td>
            <td className="px-6 py-4 text-gray-900">{product.unit}</td>
            <td className="px-6 py-4 text-gray-900">{product.basePrice}</td>
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
    ))} */}
</tbody>
          </table>
        </div>

        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl flex flex-col gap-4 w-[30%] ">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-[18px]">Add Product</p>

                  <button
                    onClick={togglePopup}
                    className=" bg-white  px-3 py-1 rounded-md w-[15%] flex justify-end"
                  >
                    <img src="/images/cross.png" alt="" className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <Select options={options} />
                  {selectedItem && (
                    <>
                      <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col w-full justify-between">
                          <p>{`SKU: ${selectedItem.sku}`}</p>
                          <p>{`PRICE: ${selectedItem.basePrice}`}</p>
                        </div>
                        <div className="flex flex-col">
                          <p>QTY</p>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex   w-full items-center gap-2">
                        <div className="flex flex-col">
                          <p>UNIT</p>
                          <input
                            name=""
                            id=""
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            value={selectedItem.unit}
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <p>Select Type</p>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose Type</option>
                            <option value="US">Loose</option>
                            <option value="CA">Damage</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex justify-between items-center w-full">
                    <button
                      type="button"
                      class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
