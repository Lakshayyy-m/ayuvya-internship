import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen gap-10">
      <h1 className="text-5xl font-bold font-mono ">AYUVYA AYURVEDA</h1>
      <Link href={"/reviews"}>
        <button className="p-5 px-7 bg-red-900 rounded-lg text-white font-bold font-mono hover:bg-red-950">
          Reviews
        </button>
      </Link>
    </main>
  );
};

export default Home;
