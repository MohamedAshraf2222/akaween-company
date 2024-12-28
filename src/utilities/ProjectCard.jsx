import React from "react";
import { bathRoom, bedRoom, heart, location, share } from "../assets/icons";
const ProjectCard = ({ project }) => {
  return (
    <div className="flex-1 pb-9 card-shadow rounded-[6px] min-w-[350px] max-w-[450px]">
      <div className="mb-2 ">
        <img
          className="h-[240px] w-full object-cover rounded-t-[6px]"
          src={project.imgs[0]}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <p className="text-primary text-[18px] font-medium">
              {project.type.ar}
            </p>
            <div className="px-2 py-1 rounded-lg bg-stroke">
              {project.status}
            </div>
          </div>
          <div className="flex gap-1 bg-stroke">
            {heart}
            {share}
          </div>
        </div>
        <div className="text-[18px] font-semibold">
          {project.forHighPrice ? (
            <div>لأعلى سعر</div>
          ) : (
            <div>{project.price} ريال سعودي</div>
          )}
        </div>
        <div className="text-[18px]">{project.name.ar}</div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-[13px]">
            {location}
            {project.region.ar}
          </div>
          <div className="flex items-center gap-2 text-[13px]">
            {bedRoom}
            {project.roomNumber}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[13px]">
          {bathRoom}
          {project.bathroomNumber} حمامات
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
