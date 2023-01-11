import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddProduct.css'

const AddProduct = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    brandName: "",
    genericName: "",
    category:"",
    quantity: "",  
    form: "",
    price : ""
  });

  const { brandName, genericName, category, quantity, form, price } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/admin/products");
  };
  return (
    <div className="add-Products-main-container">
      <AdminSidebar/>
      <div className="add-Products-container">
        <h1>Product Information</h1>
        <form onSubmit={e => onSubmit(e)}>
        <br/>
            <input
              type="text"
              placeholder="Enter Brand Name"
              name="brandName"
              value={brandName}
              onChange={e => onInputChange(e)}
            />
          <br/>
            <input
              type="text"
              placeholder="Enter the Generic Name"
              name="enericName"
              value={genericName}
              onChange={e => onInputChange(e)}
            />
            <br/>
            <input
              type="text"
              placeholder="Enter the category of the product"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
            <br/>
          <input
              type="text"
              placeholder="Enter the quantity of the product"
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            />
          <br/>
          <input
              type="text"
              placeholder="Enter the form of the product"
              name="form"
              value={form}
              onChange={e => onInputChange(e)}
            />
              <br/>
          <input
              type="text"
              placeholder="Enter the Product Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
            <br/>
      <button className="button-container" type="submit">Add A Product</button>
        </form>
      </div>
        </div>
       );
};

export default AddProduct;