import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AllProducts.css';
import AllProductsPagination from './AllProductsPagination'

const AllProducts = () => {
  const [products,setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);
  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change Pagination Pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(()=>{
    loadProduct();
  },[]);

  const loadProduct = async () =>{
    const result = await axios.get("http://localhost:3000/products");
    setProducts(result.data);
  };
  const deleteProduct = async id => {
    await axios.delete(`http://localhost:3000/products/${products.id}`);
    loadProduct();
  };
  return (
    <div className='all-products-main-container'>
      <AdminSidebar />
      <div className='all-products-container'>
    <h1>All Products</h1>
    <br/>
    <section>
    <input
    placeholder='Search'
    type='search'

    />
    <Link to="/admin/add-product">
    <button>+ Add Product</button>
    </Link>
    </section>
    <br/>
      <table>

  <thead>
    <tr>
      <th scope="col">SNo</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Generic Name</th>
      <th scope="col">ID</th>
      <th scope="col">Category</th>
      <th scope="col">Quantity</th>
      <th scope="col">Form</th>
      <th scope="col">Price</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {currentProducts.map((product,index)=>(
      <tr>
        <td scope="row"><strong>{index + 1}</strong></td>
        <td>{product.brandName}</td>
        <td>{product.genericName}</td>
        <td>{product.id}</td>
        <td>{product.category}</td>
        <td>{product.quantity}</td>
        <td>{product.form}</td>
        <td>{product.price}</td>
        <td><Link id="td-edit-icon" className="btn btn-primary m-2" to={`/admin/product/edit/${product.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link></td>
        <td><Link id="td-delete-icon" className="btn btn-danger" onClick={() => deleteProduct(product.id)}><i class="fa fa-trash" aria-hidden="true"></i></Link></td>
      </tr>

    ))}
  </tbody>
</table>
<AllProductsPagination productsPerPage={productsPerPage}
        products={products}
        paginate={paginate}
        currentPage={currentPage}/>
      </div>
    </div>
  );
}

export default AllProducts;
