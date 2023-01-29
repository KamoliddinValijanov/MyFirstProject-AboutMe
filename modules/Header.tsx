import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      {" "}
      <header className="flex justify-between mx-20 flex-wrap mt-[100px]">
        <div className="ml-[100px]">
          <div>
            <h1 className="font-bold text-4xl w-[550px] mt-[70px] mb-[20px] ">
              My name is Kamoliddin, I'am Software developer, I'm working in{" "}
              <span className="text-blue-900">ITpayTI</span>
            </h1>
            <p className="w-[800px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              labore aliquam adipisci et veniam iusto exercitationem sapiente.
              Est iusto labore nulla rerum temporibus minima perspiciatis quos,
              sapiente reprehenderit impedit provident cumque eius ullam ab?
              Eos, itaque? Ipsa asperiores nulla accusamus molestias suscipit
              dolore reprehenderit numquam provident harum quod labore maiores,
              magni alias hic inventore quibusdam eaque excepturi ipsam
              voluptatibus odio nesciunt, nam officia quasi laborum.
              Repellendus, voluptate! Et quaerat delectus ullam inventore velit
              aliquam deserunt maiores, itaque amet nihil fugiat quisquam quasi,
              cum esse culpa pariatur laboriosam asperiores est nesciunt illum
              possimus doloremque fugit deleniti odio? A unde veritatis beatae?
            </p>
          </div>
          <button className="w-[150px] h-[40px] border-2 border-gray-900 rounded-b-xl hover:bg-teal-700 hover:border-4 ease-in active:cursor-not-allowed active:before: bg-gray-900 mt-[20px] text-white ">
            Sign to My Profile
          </button>
        </div>
        <div className="mx-[100px]">
          <Image
            className="rounded-[50%] mt-[40px]"
            src="/Header.jpg"
            width={350}
            height={100}
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
