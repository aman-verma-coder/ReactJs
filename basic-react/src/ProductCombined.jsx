import './Product.css';
import Product from './Product.jsx';
function ProductCombined () {
    // let features=["4GB RAM, 64GB Storage", "8GB RAM, 1TB Storage", "16GB RAM, 2TB Storage", "Blue ink, Ballpoint", "Over the ear, Bluetooth"];
    // let features2={"Mobile": "4GB RAM, 64GB Storage", "Laptop": "8GB RAM, 1TB Storage", "Computer": "16GB RAM, 2TB Storage", "Pen": "Blue ink, Ballpoint", "Headphones": "Over the ear, Bluetooth"};
    let options=["4GB RAM, 64GB Storage", "8GB RAM, 1TB Storage", "16GB RAM, 2TB Storage", "Blue ink, Ballpoint", "Over the ear, Bluetooth"];
  return (
    <>
      <Product title={'Mobile'} price={18000} features={options}/>
      <Product title={'Laptop'} price={80000} features={options}/>
      <Product title={'Computer'} price={45000} features={options}/>
      <Product title={'Pen'} price={40} features={options}/>
      <Product title={'Headphones'} price={2500} features={options}/>
    </>
  );
}
export default ProductCombined;