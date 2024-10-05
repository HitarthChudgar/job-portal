import { useState } from "react";

const JobListing = ({ job }) => {
  const [ShowFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!ShowFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={toggleDescription}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {ShowFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            {job.location}
          </div>
          <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
