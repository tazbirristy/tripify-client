import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { cost, description, rating, serviceImg, serviceName, duration, _id } =
    service;
  return (
    <div
      className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
      data-aos="zoom-in
      "
      data-aos-duration="2000"
    >
      <PhotoProvider>
        <PhotoView src={serviceImg}>
          <img
            src={serviceImg}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
        </PhotoView>
      </PhotoProvider>
      <p className="text-red-300">Approximate Duration: {duration} days</p>

      <div className="flex flex-col justify-between p-4 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">{serviceName}</h2>
          <p className="dark:text-gray-300 text-justify">
            {description.length > 100 ? (
              <>{description.slice(0, 100) + "..."}</>
            ) : (
              description
            )}
          </p>
          <div className="flex justify-between">
            <p className="text-red-300">Ratings: {rating}</p>
            <p className="text-red-300">Price: ${cost}</p>
          </div>
        </div>
        <Link
          className="text-decoration-none text-white"
          to={`/allServices/${_id}`}
        >
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-purple-700 dark:text-gray-200"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
