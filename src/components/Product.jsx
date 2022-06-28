import React, { useState } from "react";

import product1 from "../assets/image-product-1.jpg";
import product1Thumbnail from "../assets/image-product-1-thumbnail.jpg";

import product2 from "../assets/image-product-2.jpg";
import product2Thumbnail from "../assets/image-product-2-thumbnail.jpg";

import product3 from "../assets/image-product-3.jpg";
import product3Thumbnail from "../assets/image-product-3-thumbnail.jpg";

import product4 from "../assets/image-product-4.jpg";
import product4Thumbnail from "../assets/image-product-4-thumbnail.jpg";

const ThumbNail = ({ src, alt, onClick, value, activeStyle }) => (
  <div className="cursor-pointer" onClick={onClick} value={value}>
    <img
      src={src}
      alt={alt}
      className={`h-[75px] rounded-lg w-full ${activeStyle}`}
    />
  </div>
);

const images = [
  { product: product1, alt: "product 1" },
  { product: product2, alt: "product 2" },
  { product: product3, alt: "product 3" },
  { product: product4, alt: "product 4" },
];

const Product = () => {
  const [current, setCurrent] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleLeft = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
      return;
    }
    setCurrent((cur) => cur - 1);
  };

  const handleRight = () => {
    if (current === images.length - 1) {
      setCurrent(0);
      return;
    }

    setCurrent((cur) => cur + 1);
  };

  const handleDecrement = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((qty) => qty - 1);
  };

  const handleIncrement = () => {
    setQuantity((qty) => qty + 1);
  };

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-[2rem] md:gap-[4rem] justify-between md:px-4 md:max-w-[1240px] mx-auto md:py-[3rem]">
        <div>
          <div className="relative">
            <img
              src={images[current].product}
              alt={images[current].alt}
              className="h-[25s0px] md:h-[300px] md:rounded-lg w-screen object-center md:w-[70%] duration-300 transiiton-all"
            />
            <div className="absolute md:hidden top-[50%] w-full flex justify-between px-2">
              <button
                className="bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full font-extrabold text-2xl translate-y-[-50%]"
                onClick={handleLeft}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>
              <button
                className="bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full font-extrabold text-2xl translate-y-[-50%]"
                onClick={handleRight}
              >
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
          <div className="hidden md:flex my-6 gap-4">
            <ThumbNail
              src={product1Thumbnail}
              alt="product1"
              onClick={() => setCurrent(0)}
              activeStyle={
                current === 0 && "opacity-70 border-2 border-[#fe7e1c]"
              }
            />{" "}
            <ThumbNail
              src={product2Thumbnail}
              alt="product2"
              onClick={() => setCurrent(1)}
              activeStyle={
                current === 1 && "opacity-70 border-2 border-[#fe7e1c]"
              }
            />
            <ThumbNail
              src={product3Thumbnail}
              alt="product3"
              onClick={() => setCurrent(2)}
              activeStyle={
                current === 2 && "opacity-70 border-2 border-[#fe7e1c]"
              }
            />
            <ThumbNail
              src={product4Thumbnail}
              alt="product4"
              onClick={() => setCurrent(3)}
              activeStyle={
                current === 3 && "opacity-70 border-2 border-[#fe7e1c]"
              }
            />
          </div>
        </div>
        <div className="px-4 md:px-0 md:py-10">
          <h2 className="text-lg md:text-xl text-[#fe7e1c] font-bold my-3">
            Sneaker Company
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3">
            Fall Limited Edition Sneakers
          </h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex md:flex-col justify-between items-center md:items-start py-3">
            <div className="flex items-center justify-start">
              <h1 className="text-xl md:text-2xl font-bold text-black">
                $125.00
              </h1>
              <p className="ml-8 py-1 px-2 bg-[#feeedd] text-[#fe7e1c] rounded-md w-[70px] text-center font-bold">
                50%
              </p>
            </div>
            <h2 className="md:mt-3 text-gray-400 line-through text-lg font-medium">
              $250.00
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-8 items-center md:items-stretch">
            <div className="w-full flex justify-between items-center py-2 bg-[#f7f8fd] px-2 rounded-lg">
              <button
                className="text-[#fe7e1c] font-extrabold text-2xl"
                onClick={handleDecrement}
              >
                <ion-icon name="remove-outline"></ion-icon>
              </button>
              <p className="text-2xl font-extrabold">{quantity}</p>
              <button
                className="text-[#fe7e1c] font-extrabold text-2xl"
                onClick={handleIncrement}
              >
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
            <button className="w-full py-2 px-2 rounded-lg bg-[#fe7e1c] flex items-center text-white justify-center gap-2 font-bold md:col-span-2">
              <ion-icon name="cart-outline"></ion-icon>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
