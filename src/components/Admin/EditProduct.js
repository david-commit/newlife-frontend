import AdminSidebar from '../AdminSidebar/AdminSidebar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import './EditProduct.css';

const EditProduct = () => {
  let { productID } = useParams();
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    brandName: '',
    genericName: '',
    category: '',
    quantity: '',
    form: '',
    price: '',
  });

  const { brandName, genericName, category, quantity, form, price } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`https://newlife-backend-production.up.railway.app/products/${id}`, user);
    history.push('/admin/products');
  };

  const loadUser = async () => {
    const result = await axios.get(
      `https://newlife-backend-production.up.railway.app/products/${id}`,
      user
    );
    setUser(result.data);
  };
  return (
    <div className='all-practitioners-main-container'>
      <AdminSidebar />
      <div className='edit-product-container'>
        <h1>Edit Product</h1>
        <section className='th'>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <br />
              <input
                type='text'
                placeholder='Enter the Brand Name'
                name='brandName'
                value={brandName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <br />
              <input
                type='text'
                placeholder='Enter the Generic Name'
                name='genericName'
                value={genericName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <br />
              <input
                type='text'
                placeholder='Enter the Category'
                name='category'
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <br />
              <input
                type='text'
                placeholder='Enter the quantity of the product'
                name='quantity'
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <br />
              <input
                type='text'
                placeholder='Enter the Form of Administering'
                name='form'
                value={form}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <br />
              <input
                type='number'
                placeholder='Enter the Price'
                name='price'
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <br />
            <button type='submit'>Update Product</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditProduct;
