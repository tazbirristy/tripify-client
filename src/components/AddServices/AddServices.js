import React, { useState } from "react";
import { toast } from "react-toastify";

const AddServices = () => {
  const [service, setService] = useState({});
  const handleAddServices = (event) => {
    event.preventDefault();
    console.log(service);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added Successfully", { autoClose: 500 });
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };

  return (
    <div>
      <div className="text-center mb-5">
        <h3 className="text-gray-500 text-4xl font-bold">Add Services </h3>
      </div>

      <form onSubmit={handleAddServices} className="w-2/3 mx-auto">
        <input
          onBlur={handleInputBlur}
          type="text"
          name="serviceName"
          id=""
          placeholder="Service Name"
          className="w-full border px-3 py-3 rounded-md border-purple-300 outline-purple-600"
          required
        />
        <textarea
          onBlur={handleInputBlur}
          type="text"
          name="description"
          id=""
          placeholder="Service description"
          className="w-full border px-3 py-3 rounded-md border-purple-300 outline-purple-600 mt-3"
          required
        />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="rating"
          id=""
          placeholder="Rating"
          className="w-full border px-3 py-3 rounded-md border-purple-300 outline-purple-600 mt-3"
          required
        />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="cost"
          id=""
          placeholder="Service Cost"
          className="w-full border px-3 py-3 rounded-md border-purple-300 outline-purple-600 mt-3"
          required
        />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="serviceImg"
          id=""
          placeholder="Image url"
          className="w-full border px-3 py-3 rounded-md border-purple-300 outline-purple-600 mt-3"
          required
        />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="duration"
          id=""
          placeholder="Trip Duration"
          className="w-full border px-3 py-3 rounded-md border-purple-300 outline-purple-600 mt-3"
          required
        />
        <input
          onBlur={handleInputBlur}
          type="time"
          name="time"
          id=""
          placeholder="Trip Duration"
          className="w-full border px-3 py-3 rounded-md border-purple-300 outline-purple-600 mt-3"
          required
        />
        <div className="flex justify-center mt-3">
          <button
            type="submit"
            className="w-1/3 px-5 py-3 bg-purple-500 text-gray-100 rounded-md"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
