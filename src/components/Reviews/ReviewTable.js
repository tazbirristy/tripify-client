import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReviewTable = ({ review, handleDelete }) => {
  const {
    time,
    email,
    _id,
    phone,
    reviewDesc,
    service,
    serviceName,
    userRating,
  } = review;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(`https://tripify-server.vercel.app/allServices/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  return (
    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 ">
      <td className="p-3">
        {reviewService?.serviceImg && (
          <img
            src={reviewService.serviceImg}
            alt=""
            className="w-28 rounded-md"
          />
        )}
      </td>
      <td className="p-3">
        <p>{serviceName}</p>
      </td>
      <td className="p-3">
        <p>{reviewDesc}</p>
      </td>
      <td className="p-3">
        <p>{time}</p>
      </td>
      <td className="p-3">
        <p>{email}</p>
      </td>
      <td className="p-3">
        <p>{phone}</p>
      </td>
      <td className="p-3 text-right">
        <p>{userRating}</p>
      </td>
      <td className="p-3 text-right">
        <Link to={`/updateReviews/${_id}`}>
          <button>Edit</button>
        </Link>
      </td>
      <td className="p-3 text-right">
        <button
          onClick={() => handleDelete(_id)}
          className="px-3 py-1 bg-purple-700 rounded-sm text-gray-100"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewTable;
