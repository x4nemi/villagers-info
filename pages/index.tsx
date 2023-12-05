import * as React from "react";
import type { NextPage } from "next";
import Layout from "../components/layout";
import List from "../components/list";
import NeighborCard from "../components/neighborCard";
import neighborsData from "../data/neighbors";
import CategoryCard from "../components/categoryCard";

import { realNeighbors } from "../utils/utils";

const Home: NextPage = () => {
  const [filteredNeighbors, setFilteredNeighbors] =
    React.useState(realNeighbors);

  function handleFilterBySearch(search: string) {
    if (search.length > 0) {
      setFilteredNeighbors(
        realNeighbors
          .filter((neighbor) => {
            return neighbor.Name.toLowerCase().includes(search.toLowerCase());
          })
          .slice(0, 100)
      );
    } else {
      setFilteredNeighbors(realNeighbors.slice(0, 100));
    }
  }

  console.log(realNeighbors)

  function handleFilterByCategory(search: string) {
    setFilteredNeighbors(
      realNeighbors.filter((neighbor) => {
        return neighbor.Personality.toLowerCase().includes(
          search.toLowerCase()
        );
      })
    );
  }

  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-emerald-300 text-center tracking-wide">
        Welcome to the <span className="text-cyan-400">Neighborhood</span>{" "}
      </h1>
      <div className="flex flex-row justify-center">
        <input
          className="w-full max-w-xl border  border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-yellow-200 focus:ring-1"
          id="Name"
          type={"text"}
          placeholder="Search for a villager!"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        <CategoryCard
          Icon="https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-pride.png"
          group={"Snooty"}
          handleFilter={handleFilterByCategory}
        />
        <CategoryCard
          Icon="https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-resignation.png"
          group={"Cranky"}
          handleFilter={handleFilterByCategory}
        />
        <CategoryCard
          Icon="https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-flourish.png"
          group={"Peppy"}
          handleFilter={handleFilterByCategory}
        />
        <CategoryCard
          Icon="https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-mischief.png"
          group={"Smug"}
          handleFilter={handleFilterByCategory}
        />
        <CategoryCard
          Icon="https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-sleepy.png"
          group={"Lazy"}
          handleFilter={handleFilterByCategory}
        />
        <CategoryCard
          Icon="https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-sit-down.png"
          group={"Normal"}
          handleFilter={handleFilterByCategory}
        />
        <CategoryCard
          Icon="https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-work-out.png"
          group={"Jock"}
          handleFilter={handleFilterByCategory}
        />
      </div>
      <List neighbors={filteredNeighbors} />
    </Layout>
  );
};

export default Home;
