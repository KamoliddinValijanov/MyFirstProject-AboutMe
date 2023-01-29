import React from "react";

type Props = {};

const MainPart = (props: Props) => {
  return (
    <>
      <div className=" mx-20 ">
        <h1 className="text-3xl text-center my-[100px]">About my profession</h1>
        <div className="flex border-l-8 border-r-8 rounded-r-3xl rounded-l-3xl border-gray-900 border-2 p-8 px-[50px]">
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
        <div className="flex border-l-8 border-r-8 rounded-r-3xl rounded-l-3xl border-gray-900 border-2 p-5 px-[50px] my-[50px]">
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
        <div className="flex border-l-8 border-r-8 rounded-r-3xl rounded-l-3xl border-gray-900 border-2 p-5 px-[50px]">
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
    </>
  );
};

export default MainPart;
