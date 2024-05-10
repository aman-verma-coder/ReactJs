import './Product.css';
function Product({title, price = 10}) {
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Price: ₹{price}</p>
    </div>
  );
}
export default Product;