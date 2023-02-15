import React from "react";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <>
      <div className=" w-[100%] flex flex-wrap px-[185px] justify-center py-[100px] mt-[250px] bg-gray-900">
        {/* <h1 className="text-white">what</h1>{" "} */}
        <main className="w-[400px] p-[50px] text-white rounded-l-2xl bg-gray-800 mt-5  ">
          <h1 className="mb-2 text-3xl">Making a design system from scratch</h1>
          <p className="mb-2">12 Feb 2020 | Design, Pattern</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </main>
        <main className="w-[400px] p-[50px] text-white rounded-tl-lg mx-5 rounded-br-xl bg-gray-800 mt-5">
          <h1 className="mb-2 text-3xl">
            Creating pixel perfect icons in Figma
          </h1>
          <p className="mb-2">12 Feb 2020 | Design, Pattern</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </main>
        <main className="w-[400px] p-[50px] text-white rounded-r-2xl bg-gray-800 mt-5 ">
          <h1 className="mb-2 text-3xl">Making a design system from scratch</h1>
          <p className="mb-2">12 Feb 2020 | Design, Pattern</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </main>
      </div>
    </>
  );
};

export default MiddlePart;
