import * as React from "react";
import NeighborCard, { NeighborCardProps } from "./neighborCard";

export interface NeighborListProps {
  neighbors: NeighborCardProps[];
}

const List: React.FunctionComponent<NeighborListProps> = ({ neighbors }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {neighbors.map((neighbor, index) => {
          return <NeighborCard key={index} {...neighbor} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default List;
