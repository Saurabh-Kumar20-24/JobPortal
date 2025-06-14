import React from "react";
import { Badge } from "./ui/badge";
import Jobs from "./Jobs";
import Job from "./Job";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({job}) => {
  const navigate =  useNavigate();
  return (
    <div onClick={()=>navigate(`/description/${job._id}`)} className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{Job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge variant="ghost" className={"text-blue-700 text-bold"}>
          {job?.position}
        </Badge>
        <Badge variant="ghost" className={'text-[#F83002] text-bold'}>
          {job?.jobType}
        </Badge>
        <Badge variant="ghost" className={"text-[#7209b7] text-bold"}>
          {job?.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
