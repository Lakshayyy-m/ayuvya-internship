import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarRating from "./StarRating";
import ThumbRating from "./ThumbRating";
import PraiseSelector from "./PraiseSelector";

const Reviews = () => {
  return (
    <section className="h-100 w-screen grid grid-cols-1 p-4 gap-11">
      <div className="grid grid-cols-1 gap-3">
        <Link href={"/"} className="relative h-[28px]  w-[28px] items-start">
          <Image src={"/images/closeIcon.svg"} alt="close" fill />
        </Link>
        <h1 className="text-4xl font-bold">Leave a review</h1>
      </div>
      <div className=" grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-bold">Safety</h2>
        <p className="text-gray-500">How safe did you find the product?</p>
        <StarRating />
      </div>
      <div className=" grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-bold">Communication</h2>
        <p className="text-gray-500">How safe did you find the product?</p>
        <StarRating />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-bold">Would you recomment Trausti?</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
        <ThumbRating />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Praise</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
        <PraiseSelector />
      </div>
    </section>
  );
};

export default Reviews;
