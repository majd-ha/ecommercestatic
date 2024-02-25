import React from "react";

export default function Cart({ cartItems, setcartItems }) {
  const removeFromcart = (el) => {
    let temp = cartItems.filter((ele) => ele.id !== el.id);

    setcartItems(temp);
  };
  console.log("check this ", cartItems);
  return (
    <div className="flex flex-col">
      <h1 className="w-full h-10 p-2 border border-transparent border-b-black text-start text2xl font-bold text-black">
        Cart
      </h1>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((el) => {
            return (
              <div
                key={el.id}
                className="flex items-center justify-between mt-5"
              >
                <img
                  src={el.thumb}
                  alt="f"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div>
                  <h1 className="text-start text-black font-bold pr-2">
                    {el.title}
                  </h1>
                  <div className="flex gap-2">
                    <p>
                      {el.price} * {el.numofItems}{" "}
                    </p>
                    <p className="text-black font-bold">
                      ${el.numofItems * el.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromcart(el)}
                  className="font-bold text-2xl rounded-full btn btn-circle text-red-500"
                >
                  X
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 text-xl text-center mt-10">
            Your cart is empty
          </p>
        )}
      </div>
      <button className="btn bg-orange-500 text-white mt-8 hover:bg-orange-300">
        Checkout
      </button>
    </div>
  );
}
