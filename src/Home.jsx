import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const Home = () => {
  const [popup, setPopup] = useState(false);
  const [userData, setUserData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [modifiedData, setModifiedData] = useState([]);
  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: "",
    unit: "",
    type: "All",
    sku: "",
  });

  const [allStock, setAllStock] = useState([]);

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      ModifyStock(data);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/getAll")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:5000/api/stock")
      .then((res) => {
        setModifiedData(res.data);
        setAllStock(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    
    
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setData({
      ...data,
      price: selectedOption.value,
      name: selectedOption.label,
      sku: selectedOption.sku,
    });
  };

  const viewForm = () => {
    setData({
      name: "",
      price: "",
      quantity: "",
      unit: "",
      type: "All",
      sku: "",
    });
    setSelectedOption(null);
    getData();
    setPopup(!popup);
  };

  const ModifyStock = (data) => {
    axios
      .post("http://localhost:5000/api/stock/add", data)
      .then((res) => {
        console.log("res", res.data.data);
        setPopup(!popup);
        setData({
          name: "",
          price: "",
          quantity: "",
          unit: "",
          type: "All",
          sku: "",
        });
        setSelectedOption(null);
        getData();
      })
      .catch((err) => {
        console.error("Error modifying stock:", err);
      });
  };

  const validateForm = () => {
    const errors = {};
    let formIsValid = true;

    if (!selectedOption) {
      errors.selectedOption = "Please select a product";
      formIsValid = false;
    }

    if (!data.quantity) {
      errors.quantity = "Quantity is required";
      formIsValid = false;
    }

    if (!data.unit) {
      errors.unit = "Unit is required";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const dateSetter = (date) => {
    const monthLater = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return `${day} ${monthLater[month]} ${year}`;
  };

  const updateProduct = (item) => {
    setPopup(true);
    setData({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      unit: item.unit,
      type: item.type,
      sku: item.sku,
    });
    const foundProduct = userData.find((data) => data.sku == item.sku);
    setSelectedOption({
      label: foundProduct.name,
      value: foundProduct.mrp,
      sku: foundProduct.sku,
    });
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:5000/api/stock/${productId}`)
      .then((res) => {
        console.log("Product deleted successfully:", res.data);
        getData();
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  return (
    <>
      <div className="w-full relative p-4 flex flex-col gap-4">
        <div className="flex justify-between bg-gray-50">
          <p className="text-[16px] font-semibold">
            All Users {userData.length}{" "}
          </p>
          <div className="flex justify-between w-[14%] gap-3 items-center">
            <button className="bg-white p-2 rounded-[4px] ">Filters</button>
            <button
              className="bg-blue-500 p-2 rounded-[4px] text-white"
              onClick={viewForm}
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
                    <label className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3 text-gray-900 ">
                  <select
                    value={data.type}
                    name="type"
                    onChange={(e) => {
                      setModifiedData(
                        allStock.filter((item) => item.type == e.target.value)
                      );
                    }}
                    className="w-[60%]"
                  >
                    <option value="All">All</option>
                    <option value="Damage">Damage</option>
                    <option value="Loose">Loose</option>
                  </select>
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
              {modifiedData?.map((item, index) => (
                <>
                  <tr className="bg-white border-b  ">
                    <td className="w-4 p-4">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4 text-gray-900 ">{item.sku} </td>
                    <td className="px-6 py-4 text-gray-900 ">{item.type} </td>
                    <td className="px-6 py-4 text-gray-900 ">{item.unit} </td>
                    <td className="px-6 py-4 text-gray-900 ">{item.price}</td>

                    <td className="flex items-center px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          updateProduct(item);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        onClick={() => {
                          deleteProduct(item._id);
                        }}
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {popup && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl flex flex-col gap-4 w-[30%] ">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-[18px]">Add Product</p>

                  <button
                    onClick={viewForm}
                    className="bg-white px-3 py-1 rounded-md w-[15%] flex justify-end"
                  >
                    <img src="/images/cross.png" alt="" className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <Select
                    id="mySelect"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={userData.map((item) => ({
                      label: item.name,
                      value: item.mrp,
                      sku: item.sku,
                    }))}
                    className="px-[10px] py-[5px] rounded-[5px] w-[100%]"
                    placeholder="Select Product"
                  />
                  {errors.selectedOption && (
                    <p className="text-red-500">{errors.selectedOption}</p>
                  )}
                  <div className="w-[100%] flex min-gap-[10%] flex-row justify-between">
                    <div className="flex flex-col w-[45%] gap-[20px]">
                      <p className="font-[500]">Price</p>
                      {selectedOption ? (
                        <p>{selectedOption.value}</p>
                      ) : (
                        <p>Price not available</p>
                      )}
                    </div>
                    <div className="flex flex-col w-[45%] gap-[20px]">
                      <p className="font-[500]">Quantity</p>
                      <input
                        type="number"
                        placeholder="Enter Quantity"
                        name="quantity"
                        value={data.quantity}
                        onChange={changeHandler}
                        className="border-[1px] px-[10px] py-[5px] rounded-[5px]"
                      />
                      {errors.quantity && (
                        <p className="text-red-500">{errors.quantity}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-[100%] flex min-gap-[10%] flex-row justify-between">
                    <div className="flex flex-col w-[45%] gap-[20px]">
                      <p className="font-[500]">Unit</p>
                      <input
                        type=""
                        placeholder="Enter Unit"
                        name="unit"
                        value={data.unit}
                        onChange={changeHandler}
                        className="border-[1px] px-[10px] py-[5px] rounded-[5px]"
                      />
                      {errors.unit && (
                        <p className="text-red-500">{errors.unit}</p>
                      )}
                    </div>
                    <div className="flex flex-col w-[45%] gap-[20px]">
                      <p className="font-[500]">Type</p>
                      <select
                        value={data.type}
                        name="type"
                        onChange={changeHandler}
                        className="w-[60%]"
                      >
                        <option value="Damage">Damage</option>
                        <option value="Loose">Loose</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-[100%] flex justify-between">
                    <button
                      className="text-[white] font-[500] bg-[red] rounded-[8px] px-[20px] py-[5px]"
                      onClick={viewForm}
                    >
                      Close
                    </button>
                    <button
                      className="text-[white] font-[500] bg-[green] rounded-[8px] px-[20px] py-[5px]"
                      onClick={submitHandler}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
