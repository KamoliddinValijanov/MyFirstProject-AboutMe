import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="mt-[200px] text-white bg-gray-900 px-[50px] py-[100px]">
        <div className="flex  justify-between">
          <div>
            <h1 className="text-3xl mb-5">
              links and bots for get in touch with me{" "}
            </h1>
            <p className="w-[450px] mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              quia est iure, vero dignissimos temporibus, tempore aut delectus
              neque obcaecati alias quibusdam accusamus. Tempora vitae fugiat
              repudiandae culpa modi minima sunt eius dolores enim voluptatibus,
              iusto nesciunt doloremque libero quisquam voluptatum, officiis
              consequatur distinctio dignissimos. Facere adipisci optio iusto
              sint.
            </p>
          </div>
          <div>
            <div className=" w-[500px] flex justify-evenly text-center  mt-[50px]">
              <div>
                <div>
                  <p className="text-xl text-gray-500">Links</p>
                </div>
                <div>
                  <a href="">Git hub</a>
                </div>
                <div>
                  <a href="">telegram</a>
                </div>
                <div>
                  <a href="">Instagram</a>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-xl text-gray-500">Bots</p>
                </div>
                <div>
                  <a href="https://t.me/ditopabgmbot">ditopabg</a>
                </div>
                <div>
                  <a href="https://t.me/kolyangamebot">kolyangame</a>
                </div>
                <div>
                  <a href="https://t.me/For_It_Training_bot">ForItTraining</a>
                </div>
                <div>
                  <a href="https://t.me/Ratherkamolibot">Ratherkamoli</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[100%] border-b-2 border-dotted border-gray-700 mt-10"></div>
          <div className="flex justify-between px-[780px]">
            <p className="py-[40px]">Register for free</p>
            <button className=" w-[100px] h-[50px] active:cursor-not-allowed duration-75 hover:bg-gray-700 rounded-full  bg-gray-900 border-1 border-double border-white mt-[30px]">
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
                className="bg-white rounded-3xl mt-10"
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
                className=" rounded-3xl mt-10"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://t.me/Kamoli06">
              <Image
                src="/telegram.png "
                className="mt-10 bg-white rounded-3xl"
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
