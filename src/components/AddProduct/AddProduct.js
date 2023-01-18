import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddProduct.css';

const AddProduct = ({ uniqueCategoryArray }) => {
  let history = useHistory();
  const [categories] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [errors, setErrors] = useState([]);
  console.log(errors);

  // Storing all categories in array
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => {
        data.map((d) => categories.push(d.category));
      });
  }, []);

  // Get user token
  const token = localStorage.getItem('token');

  // Get admin data
  const userData = localStorage.getItem('person');
  const adminId = JSON.parse(userData).id;

  const handleAddProduct = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/admins/${adminId}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({
        name,
        image,
        category,
        stock,
        price,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then(() => alert('Product added successfully!'));
        setName('');
        setImage('');
        setCategory('');
        setStock(0);
        setPrice(0);
      } else {
        response.json().then(() => {
          alert('Product not added!');
          setErrors(response);
        });
      }
    });
  };

  return (
    <div className='add-Products-main-container'>
      <AdminSidebar />
      <div className='add-Products-container'>
        <h1>Add Product</h1>
        <form onSubmit={handleAddProduct}>
          <br />
          <label htmlFor='name'>Enter Name</label>
          <input
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Enter Image URL</label>
          <input
            type='url'
            placeholder='Enter Image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <select onChange={(e) => setCategory(e.target.value)}>
            <option hidden>Select Product Category</option>
            {Array.isArray(uniqueCategoryArray) ? (
              uniqueCategoryArray?.map((cat, index) => {
                return (
                  <option value={cat} key={index}>
                    {cat}
                  </option>
                );
              })
            ) : (
              <p>Select Category</p>
            )}
          </select>
          <br />
          <label>Enter product quantity</label>
          <input
            type='number'
            min='0'
            placeholder='Enter the quantity of the product'
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <br />
          <label>Enter Price</label>
          <input
            type='number'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <button className='button-container' type='submit'>
            Add Product
          </button>
        </form>
        {Array.isArray(errors) &&
          errors.map((error) => {
            return <li>{error}</li>;
          })}
      </div>
    </div>
  );
};

export default AddProduct;
