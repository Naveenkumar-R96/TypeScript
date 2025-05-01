import React, { useState } from "react";

const Cart = ({ data, toggle }) => {
  const [cart, setCart] = useState([]);

  const handleAdd = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
return (
    <div className="flex flex-wrap justify-center items-center gap-4 relative">
        {data.map((item) => (
            <div
                key={item.id}
                className=" justify-center items-center gap-3 p-3 flex-wrap  rounded "
            >
                <div className="w-[230px] sm:w-[300px] min-h-[450px] h-auto bg-white flex flex-col justify-center items-center gap-3 p-3 rounded shadow-sm">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-[100px] sm:w-[130px] bg-white p-2 rounded"
                    />
                    <div className="mt-2">
                        <h1 className="text-gray-600 text-lg font-semibold">
                            {item.title}
                        </h1>
                        <p className="text-gray-600 text-sm">${item.price}</p>
                    </div>
                    <button
                        className="bg-green-300 px-3 py-2 rounded"
                        onClick={() => handleAdd(item)}
                        disabled={cart.some((cartItem) => cartItem.id === item.id)}
                    >
                        {cart.some((cartItem) => cartItem.id === item.id)
                            ? "Added"
                            : "Add Cart"}
                    </button>
                </div>
            </div>
        ))}

        {toggle ? (
            <div className="h-screen w-[400px] bg-white fixed right-0 top-0">
                <h1 className="text-2xl text-center font-semibold p-3">Cart</h1>
                <div className="flex flex-col gap-4 p-3">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center bg-gray-100 p-2 rounded"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[50px] h-[50px] rounded"
                            />
                            <h1 className="text-gray-600 text-sm">{item.title}</h1>
                            <p className="text-gray-600 text-sm">${item.price}</p>
                            <button
                                className="bg-red-300 px-3 py-2 rounded"
                                onClick={() =>
                                    setCart(cart.filter((cartItem) => cartItem.id !== item.id))
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        ) : null}
    </div>
);
};

export default Cart;
