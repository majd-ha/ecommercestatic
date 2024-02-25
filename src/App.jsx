import { useState } from "react";

import thumb1 from "./assets/image-product-1-thumbnail.jpg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fall Limited Edition sneaker",
      company: "sneaker company",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur architecto, vero quas voluptate voluptatibus numquam obcaecati odit. numquam obcaecati odit. ",
      price: 125.0,
      oldprice: 250.0,
      thumb: thumb1,
      numofItems: 1,
    },
  ]);
  const [cartItems, setcartItems] = useState([]);
  console.log(cartItems);
  return (
    <div>
      <Navbar cartItems={cartItems} setcartItems={setcartItems} />
      <Home
        products={products}
        cartItems={cartItems}
        setcartItems={setcartItems}
      />
    </div>
  );
}

export default App;
