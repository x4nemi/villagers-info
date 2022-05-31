import * as React from "react";

export interface NeighborCardProps {
  ID: number;
  Name: string;
  Personality: string;
  Birthday: string;
  Species: string;
  Gender: string;
  Icon: string;
}

const NeighborCard: React.FunctionComponent<NeighborCardProps> = ({
  ID,
  Name,
  Personality,
  Birthday,
  Species,
  Gender,
  Icon,
}) => {
  return (
    <React.Fragment>
      <div className="bg-[#F7F6F3] p-2 rounded-xl shadow-md flex flex-col items-center">
        <span
        // role={"img"} aria-label={Icon}
        >
          <img className="w-16 md:w-32 lg:w-full" src={Icon} />
        </span>
        <h3 className="font-bold text-gray-700">{Name}</h3>
        <button className="text-blue-500  text-sm pt-3">villager info</button>
      </div>
    </React.Fragment>
  );
};

export default NeighborCard;
