import React, { useState, useEffect } from "react";
import Select from "react-select";

const Final = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Initialize selectedOption to null
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState("");

  console.log(options)

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const url = "https://freedygoservices.in/api/product/getAll";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.data) {
          const formattedOptions = data.data.map((item) => ({
            value: item.name,
            label: item.name,
            sku: item.sku,
            basePrice: item.basePrice,
            unit: item.unit,
          }));
          setOptions(formattedOptions);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addProduct = () => {
    setShowPopup(false); // Close the popup
    const selectedProduct = options.find(option => option.value === selectedOption.value);
    if (selectedProduct) {
      const productToAdd = { ...selectedProduct, quantity, selectedType };
      setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, productToAdd]);
    }
  };

  return (
    <>
      <div className="w-full relative p-4 flex flex-col gap-4">
        {/* Your existing code */}
        <div className="w-full relative  p-4 flex flex-col gap-4">
        <div className="flex justify-between bg-gray-50">
            {/* Your existing code */}
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

          <div className="shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50  dark:text-gray-400">
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
              <tbody>
                {/* Loop over selected products to display them */}
                {options.map((product, index) => (
                  <tr key={index} className="bg-white border-b  ">
                    {/* Render product details */}
                    <td className="w-4 p-4">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    </td>
                    <th
                      scope="row"
                      className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {product.label}
                    </th>
                    <td className="px-6 py-4 text-gray-900 ">{product.sku}</td>
                    <td class="px-6 py-4 text-gray-900 ">{product.type}</td>
                <td class="px-6 py-4 text-gray-900 ">{product.unit}</td>
                <td class="px-6 py-4 text-gray-900 ">{product.basePrice}</td>
                    {/* Render other product details */}
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
              </tbody>
            </table>
          </div>

          {/* Your existing code */}
        </div>
      </div>
      {/* Popup for adding new product */}
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
                <Select
                  options={options}
                  onChange={(selectedOption) => setSelectedOption(selectedOption)} // Update selectedOption here
                  isMulti
                />
                
                {/* Quantity input */}
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                {/* Type select */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="Loose">Loose</option>
                  <option value="Damage">Damage</option>
                </select>
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
                    onClick={addProduct}
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

export default Final;
