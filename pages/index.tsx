import * as React from "react";
import type { NextPage } from "next";
import Layout from "../components/layout";
import List from "../components/list";
import NeighborCard from "../components/neighborCard";
import neighborsData from "../data/neighbors";

const Home: NextPage = () => {
  const [filteredNeighbors, setFilteredNeighbors] =
    React.useState(neighborsData);

  function handleFilterBySearch(search: string) {
    if (search.length > 0) {
      setFilteredNeighbors(
        neighborsData.filter((neighbor) => {
          return neighbor.Name.toLowerCase().includes(search.toLowerCase());
        })
      );
    } else {
      setFilteredNeighbors(neighborsData);
    }
  }
  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-emerald-300 text-center tracking-wide">
        Welcome to the <span className="text-cyan-400">Neighborhood</span>{" "}
      </h1>
      <div className="justify-center">
        <input
          className="w-full max-w-xl border  border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-yellow-200 focus:ring-1"
          id="Name"
          type={"text"}
          placeholder="Search for a villager!"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      <List neighbors={filteredNeighbors} />
    </Layout>
  );
};

export default Home;
