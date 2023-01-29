import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className="flex justify-evenly mt-20">
        <div>
          <Image
            src="/programmer.png"
            width={300}
            height={300}
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="w-[550px] mb-20">
          <h1 className="text-3xl text-center mb-10">
            About my call number !!
          </h1>
          <p className="w-[550px] text-center mb-10">
            We are enjoy met you in our sites can you give your grade for my own
            portfoliyo site.If you want bind with me you can call with this
            number. This number is mine. you can call and ask me what you want.
          </p>
          <h1 className="text-center text-3xl mb-5">Tel number :</h1>
          <p className="text-3xl text-center">
            <a href="Tel:+998911810008">+998 91 181 00 08</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
