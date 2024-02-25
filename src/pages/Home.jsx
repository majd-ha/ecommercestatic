import { useState } from "react";
import Card from "../components/Card";

export default function Home({ setcartItems, products }) {
  const [numofItems, setnumofItems] = useState(1);

  const addToCart = (items) => {
    setcartItems([{ ...items, numofItems }]);
  };
  return (
    <div className=" w-11/12 mx-auto flex max-sm:flex-col py-10 max-sm:py-1  max-sm:w-full">
      <div className="flex-1 px-10 max-sm:w-full max-sm:px-1">
        <Card />
      </div>
      <div className="flex-1 p-10 my-2 max-sm:p-2">
        <p className="text-yellow-600 text-sm text-start font-bold my-2 uppercase">
          {products[0].company}
        </p>
        <h1 className="text-4xl text-start font-bold capitalize text-wrap my-2 pr-5">
          {products[0].title}
        </h1>
        <p className="text-sm text-gray-400 my-6 text-start">
          {products[0].description}
        </p>
        <div className="flex flex-col max-sm:flex-row max-sm:justify-between max-sm:items-center">
          <div className="flex justify-between items-start w-1/4 my-2">
            <p className="font-bold text-3xl">${products[0].price}</p>
            <p className="text-orange-500 bg-orange-200 rounded-lg text-sm px-2 py-1 mx-1 font-bold">
              50%
            </p>
          </div>
          <p className="my-2 text-gray-400 line-through text-start font-bold">
            ${products[0].oldprice}
          </p>
        </div>

        {/*  */}
        <div className="flex mt-10 max-sm:flex-col max-sm:items-center gap-2">
          <div className="join  join-horizontal max-sm:w-full">
            <button
              className="btn join-item text-orange-500   flex-1 text-4xl leading-[0] "
              onClick={() =>
                setnumofItems((prev) => (prev > 1 ? prev - 1 : prev))
              }
            >
              -
            </button>
            <p className="w-1/3  btn join-item cursor-text font-bold  flex-1">
              {numofItems}
            </p>
            <button
              className="btn join-item text-orange-500 font-bold  flex-1  text-3xl leading-[0]"
              onClick={() => setnumofItems((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="bg-orange-500 py-2 px-3 btn hover:bg-orange-300 text-white rounded-xl mx-2 w-2/3 max-sm:w-full"
            onClick={() => addToCart(products[0])}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>{" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
