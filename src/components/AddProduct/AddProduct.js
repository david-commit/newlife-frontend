import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddProduct.css';

const AddProduct = () => {
  let history = useHistory();
  const [products, setProducts] = useState([])
  const [user, setUser] = useState({
    name: '',
    image: '',
    category: '',
    stock: '',
    price: '',
  });

  const { name, category, price, image, stock } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users', user);
    history.push('/admin/products');
  };

  useEffect(() => {
    fetch(`/products`)
    .then(res => res.json())
    .then(data => setProducts(data))
  })

  return (
    <div className='add-Products-main-container'>
      <AdminSidebar />
      <div className='add-Products-container'>
        <h1>Add Product</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <br />
          <label htmlFor="name">Enter Name</label>
          <input
            type='text'
            placeholder='Enter Name'
            name='name'
            value={name}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label>Enter Image URL</label>
          <input
            type='text'
            placeholder='Enter Image URL'
            name='image'
            value={image}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <select onChange={(e) => onInputChange(e)} >
            <option hidden>Select Product Category</option>
            {products > 0 ? (products?.map((product) => {
              return(
                <option value={product.id}>{product.category}</option>
              )
            })) : (
              <p>Select Category</p>
            )}
          </select>
          <br />
          <label>Enter product quantity</label>
          <input
            type='number'
            min="0"
            placeholder='Enter the quantity of the product'
            name='stock'
            value={stock}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label>Enter Price</label>
          <input
            type='number'
            placeholder='Enter the Product Price'
            name='price'
            value={price}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <button className='button-container' type='submit'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
