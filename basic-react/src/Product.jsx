import './Product.css';
// eslint-disable-next-line react/prop-types
function Product({title, price, features, features2}) {
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Price: ₹{price}</p>
      <p>Feature: {features}</p>
      <p>Features: {features2}</p>
    </div>
  );
}
export default Product;
