import './Product.css';
// eslint-disable-next-line react/prop-types
function Product({title, price, features}) {
  // eslint-disable-next-line react/prop-types, react/jsx-key
  const list = features.map (feature => <li>{feature}</li>);
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Feature: {list}</p>
      <p>Price: ₹{price}</p>
      {price > 5000 ? <p>Discounted Price: ₹{price - price * 0.1}</p> : <a href='/'>Get Discount</a>}
      {/* <p>Features: {features2}</p> */}
    </div>
  );
}
export default Product;
