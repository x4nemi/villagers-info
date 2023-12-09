import * as React from "react";
import NeighborCard, { NeighborCardProps } from "./neighborCard";
import FlipChidoCard from "./FlipChidoCard";

export interface NeighborListProps {
  neighbors: NeighborCardProps[];
}

const List: React.FunctionComponent<NeighborListProps> = ({ neighbors }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {neighbors.map((neighbor, index) => {
          return <FlipChidoCard key={index} {...neighbor} />;
          // <NeighborCard key={index} {...neighbor} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default List;
