import React from "react";
import useTitle from "./../../hooks/useTitle";

const About = () => {
  useTitle("About");

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-12">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 className="text-3xl font-semibold text-purple-600">
                About Tripify
              </h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  Determining clients' needs and suggesting suitable travel
                  packages.{" "}
                </h3>

                <p className="mt-3">
                  Organizing travels from beginning to end, including tickets,
                  accommodation and transportation.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  Supplying travelers with pertinent information and useful
                  travel/holiday materials.
                </h3>

                <p className="mt-3">
                  Contacts at properties across the globe to help customize
                  clients' needs.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  Ensure the accuracy and completeness of travel policies and
                  process documentation
                </h3>

                <p className="mt-3">
                  Organize travel from beginning to end and book tickets,
                  accommodation, secure rental transportation, and arrange for
                  meals when requested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
