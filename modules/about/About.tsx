import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";

type Props = {};

const about = (props: Props) => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className=" flex justify-around my-[200px] mx-[200px]">
        <div>
          <Image
            className="object-cover rounded-3xl"
            src="/it.png"
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="mt-[100px]">
          <h1 className="text-center m-auto text-3xl w-[700px]">
            Hi, my name is Valijanov Kamoliddin.
          </h1>
          <p className="text-center m-auto text-2xl w-[600px] mt-5">
            I'm 16 and I'm in school. In IT, I understand better than in school
            lessons. I'm interested in cool designs, I try to create the perfect
            website, I live in Namangan, I will be perfect programmer
          </p>
        </div>
      </div>
      <div className=" mx-20  my-[300px] p-[40px] bg-gray-900 rounded-3xl">
        <div className="flex border-l-8 border-r-8 rounded-r-3xl rounded-l-3xl border-gray-700 border-2 p-8 px-[50px]">
          <p className="mr-5 mt-2">
            <span className="text-3xl">*</span>{" "}
          </p>
          <p>
            Programming skills are essential for many technology disciplines,
            but are in especially high demand for software and web development
            roles. According to the US Bureau of Labor Statistics (BLS), web
            development jobs are projected to grow by as much as 30% from
            2021-2031, adding another 28,900 new jobs.
          </p>
        </div>
        <div className="flex border-l-8 border-r-8 rounded-r-3xl rounded-l-3xl border-gray-700 border-2 p-5 px-[50px] my-[50px]">
          <p className="mr-5 mt-2">
            {" "}
            <span className="text-3xl">*</span>
          </p>{" "}
          <p>
            A Software Developer, or Computer Software Developer, is responsible
            for using their knowledge of programming languages to design
            software programs. Their duties include meeting with clients to
            determine their software needs, coding and testing software to
            ensure functionality and updating software programs to refine
            components like cybersecurity measures and data storage capacities.
          </p>
        </div>
        <div className="flex border-l-8 border-r-8 rounded-r-3xl rounded-l-3xl border-gray-700 border-2 p-5 px-[50px]">
          <p className="mr-5 mt-2">
            {" "}
            <span className="text-3xl">*</span>
          </p>{" "}
          <p>
            A successful Software Developer candidate will have various
            prerequisite skills/qualifications needed for duties. In this
            section, you can include the educational qualifications, skills and
            work experience applicants must have before applying for your role.
            Here are some examples of Software Developer qualifications:
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
