import React from "react";
import banner from "../../../assets/banner.svg";

const Banner = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={banner}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Welcome To <span className="text-purple-600">Tripify</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            A 360 Degree/one stop Travel Solution Firm founded and
            <br />
            operated By{" "}
            <span className="text-purple-600">
              Mohammad Tazbir Rahman Risty.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
