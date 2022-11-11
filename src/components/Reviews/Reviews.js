import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";
import useTitle from "./../../hooks/useTitle";

const Reviews = () => {
  useTitle("Reviews");

  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(`https://tripify-server.vercel.app/reviews?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("tripify-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to Delete your Review?"
    );
    if (proceed) {
      fetch(`https://tripify-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("tripify-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Data Successfully Deleted", { autoClose: 500 });
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviews.length === 0 ? (
        <h1 className="text-center font-bold text-4xl text-purple-700">
          No reviews were added
        </h1>
      ) : (
        <div>
          <h2 className="text-center text-2xl font-bold text-purple-700 my-5">
            You Gave {reviews?.length} Review
          </h2>
          <div>
            <div className="overflow-x-auto rounded-md">
              <table className="min-w-full text-md">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-gray-700">
                  <tr className="text-center text-gray-300 text-md">
                    <th className="p-3">Service Image</th>
                    <th className="p-3">Service Name</th>
                    <th className="p-3">Review Content</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3 text-right">Rating</th>
                    <th className="p-3">Action</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="text-center text-gray-300">
                  {reviews?.map((review) => (
                    <ReviewTable
                      key={review._id}
                      review={review}
                      handleDelete={handleDelete}
                    ></ReviewTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
