import './Product.css';
import Product from './Product.jsx';
function ProductCombined () {
  return (
    <>
      <Product title={'Mobile'} price={18000} />
      <Product title={'Laptop'} price={80000} />
      <Product title={'Computer'} price={45000} />
      <Product title={'Pen'} price={40} />
      <Product title={'Headphones'} price={2500} />
    </>
  );
}
export default ProductCombined;