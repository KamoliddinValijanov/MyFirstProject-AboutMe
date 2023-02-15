import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className=" w-[100%] mt-[200px] text-white bg-gray-900 px-[50px] py-[100px]">
        <div className="flex justify-between flex-wrap">
          <div className="  flex flex-col sm:justify-center sm:ml-[150px] lg:ml-[150px] md:text-center">
            <h1 className="text-3xl mb-5 text-center">
              Shortly about myself.{" "}
            </h1>
            <p className="w-[350px]  mb-5 text-center">
              I am a web developer student. I am still learning to code, and
              have completed JavaScript, React js, Next js, Typescript js.
            </p>
          </div>
          <div className="sm:ml-[200px] ml-[50px]">
            <div>
              <h1 className="  text-3xl mb-5 w-[300px] text-center"></h1>
              <div className="w-[500px] flex gap-20 text-center">
                <div>
                  <div>
                    <p className="text-xl text-gray-500">Links</p>
                  </div>
                  <div className="hover:border-b-2 hover:border-dotted">
                    <a href="https://github.com/KamoliddinValijanov">Git hub</a>
                  </div>
                  <div className="hover:border-b-2 hover:border-dotted">
                    <a href="https://t.me/Kamoli06">telegram</a>
                  </div>
                  <div className="hover:border-b-2 hover:border-dotted">
                    <a href="https://www.instagram.com/valijanov_kamoliddin06">
                      Instagram
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-xl text-gray-500">Bots</p>
                  </div>
                  <div className="hover:border-b-2 hover:border-dotted">
                    <a href="https://t.me/ditopabgmbot">ditopabg</a>
                  </div>
                  <div className="hover:border-b-2 hover:border-dotted">
                    <a href="https://t.me/kolyangamebot">kolyangame</a>
                  </div>
                  <div className="hover:border-b-2 hover:border-dotted">
                    <a href="https://t.me/For_It_Training_bot">ForItTraining</a>
                  </div>
                  <div className="hover:border-b-2 hover:border-dotted">
                    <a href="https://t.me/Ratherkamolibot">Ratherkamoli</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[100%] border-b-2 border-dotted border-gray-700 mt-10"></div>
          <div className="flex justify-center">
            <button className=" w-[200px] h-[50px] active:cursor-not-allowed active:scale-50 duration-75 hover:bg-gray-700 rounded-full bg-gray-900 border-1 border-double border-white my-10 ">
              Register for free
            </button>
            <button className=" w-[100px] h-[50px] active:cursor-not-allowed active:scale-50 duration-75 hover:bg-gray-700 rounded-full  bg-gray-900 border-1 border-double border-white my-10">
              Sign up
            </button>
          </div>
          <div className="w-[100%] border-b-2 border-dotted  border-gray-700"></div>
        </div>
        <div className="flex justify-center items-center gap-[50px] mt-[70px]">
          <div>
            <a href="https://github.com/KamoliddinValijanov">
              <Image
                src="/github.png"
                className="bg-white rounded-3xl mt-10 active:scale-50"
                width={50}
                height={50}
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/valijanov_kamoliddin06/">
              <Image
                src="/insta.png "
                width={50}
                height={50}
                className=" rounded-3xl mt-10 active:scale-50"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://t.me/Kamoli06">
              <Image
                src="/telegram.png "
                className="mt-10 bg-white rounded-3xl active:scale-50"
                width={50}
                height={50}
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
