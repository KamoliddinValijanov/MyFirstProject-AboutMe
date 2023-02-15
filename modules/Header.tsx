import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      {" "}
      <header className="flex justify-between mx-[170px] flex-wrap mt-[100px]">
        <div className="">
          <div>
            <h1 className="font-bold text-4xl w-[550px] mt-[70px] mb-[20px] ">
              My name is Kamoliddin, I'am Software developer, I'm working in{" "}
              <span className="text-blue-900">ITpayTI</span>
            </h1>
            <p className="w-[650px] text-2xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              labore aliquam adipisci et veniam iusto exercitationem sapiente.
              Est iusto labore nulla rerum temporibus minima perspiciatis quos,
              sapiente reprehenderit impedit provident cumque eius ullam ab?
              Eos, itaque?
            </p>
          </div>
          <button className="w-[150px] h-[40px] border-2 border-gray-900 rounded-b-xl hover:bg-teal-700 hover:border-4  active:cursor-not-allowed active:before: bg-gray-900 mt-[20px] text-white ">
            Sign to My Profile
          </button>
        </div>
        <div className="mx-[50px] w-[400px] h-[400px]">
          <Image
            className="rounded-[100%] mt-[40px] w-[100%] object-cover h-[100%]"
            src="/Header01.jpg"
            width={600}
            height={600}
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
