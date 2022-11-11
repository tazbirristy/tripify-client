import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../../Loader/Loader";
import Service from "../Service/Service";
import { Link } from "react-router-dom";

const Services = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [services, setServices] = useState();
  console.log(services);
  useEffect(() => {
    fetch("https://tripify-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [setLoading]);
  return (
    <div className="mb-12">
      <h1 className="text-center font-bold my-10 text-gray-300 text-5xl bg-purple-800 py-3 rounded-md w-1/3 mx-auto">
        Services
      </h1>
      <div>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services?.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-3">
        <Link to="/allServices">
          <button className="px-5 py-3 bg-purple-800 text-gray-100 rounded-md">
            Visit All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
