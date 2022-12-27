import { Link } from 'react-router-dom';
import './Shop.css';

function Shop({ products, handleSearch, loading }) {

  if (loading) {
    return <h1>Loading...</h1>
  }

  // const [sortProducts, setSortProducts] = useState('');
  // console.log(sortProducts);

  // if (sortProducts === "price-asc") {
  //   products && products.sort((a, b) => a.price > b.price ? 1 : -1)
  // }
  // if (sortProducts === "price-desc") {
  //   products && products.sort((a, b) => a.price < b.price ? 1 : -1)
  // }

  const renderedProducts =
    products &&
    products.map((product) => {
      return (
        <Link
          to={`/products/${product.id}`}
          className='shop-card-nav'
          key={product.id}
        >
          <div className='shop-card'>
            <img src={product.image} alt='Product' />
            <div className='shop-card-text'>
              <p>{product.category}</p>
              <div className='product-title'>
                <h3>{product.title}</h3>
              </div>
              <h4>Ksh {product.price}</h4>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <div className='shop-main-container'>
      <h1>Shop</h1>
      <div className='shop-search-filter-container'>
        <input
          onChange={handleSearch}
          type='search'
          id='search-input'
          placeholder='Search'
          style={{
            fontSize: '16px',
            padding: '4px',
            borderRadius: '5px',
            border: '1px solid grey',
          }}
        />
        <select
          id='shop-sort'
          // onChange={(e) => setSortProducts(e.target.value)}
        >
          <option hidden>Sort</option>
          <option value='price-asc'>Price: Low to High</option>
          <option value='price-desc'>Price: High to Low</option>
        </select>
      </div>
      <div className='shop-cards'>{renderedProducts}</div>
    </div>
  );
}

export default Shop;
