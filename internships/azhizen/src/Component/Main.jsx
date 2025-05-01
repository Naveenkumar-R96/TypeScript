import React from "react";
import Search from "./Search";
import Api from "./Api";
import Cart from "../Component/Cart";
import { useState, useEffect } from "react";
const Main = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const dataa = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    dataa();
  }, []);

const addProduct = async () => {
    const product = { title: "New Product", price: 29.99 };
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        const result = await response.json();
      
    } catch (error) {
        console.error("Error adding product:", error);
    }
};

useEffect(() => {
    addProduct();
}, []);
  return (
    <div className="h-auto bg-gray-200">
      <Search
        data={data}
        setData={setData}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Cart data={data} toggle={toggle} />
    </div>
  );
};

export default Main;
