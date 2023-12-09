import * as React from "react";
import type { NextPage } from "next";
import Layout from "../components/layout";
import List from "../components/list";
import CategoryCard from "../components/categoryCard";

import { realNeighbors } from "../utils/utils";
import { SearchInput } from "../components/SearchInput";

const Home: NextPage = () => {
  const [filteredNeighbors, setFilteredNeighbors] =
    React.useState(realNeighbors);

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  function handleFilterBySearch(search: string) {
    console.log(search);

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

  const categories: Record<string, string> = {
    "All": "https://dodo.ac/np/images/5/59/Emotion_Love_NH_Icon.png",
    "Snooty": "https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-pride.png",
    "Cranky": "https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-resignation.png",
    "Peppy": "https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-flourish.png",
    "Smug": "https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-mischief.png",
    "Lazy": "https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-sleepy.png",
    "Normal": "https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-sit-down.png",
    "Jock": "https://animalcrossingworld.com/wp-content/uploads/2020/06/animal-crossing-new-horizons-guide-reaction-icon-work-out.png",
  }

  function handleFilterByCategory(search: string) {
    setSelectedCategory(search);
    setFilteredNeighbors(
      realNeighbors.filter((neighbor) => {
        return neighbor.Personality.toLowerCase().includes(
          search === 'All' ? '' : search.toLowerCase()
        );
      })
    );
  }

  return (
    <Layout>
      <div className="flex flex-row justify-center mb-10">
        <SearchInput icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#a1a1aa" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>} 
        placeholder="Search for a villager!" onChange={(e) => handleFilterBySearch(e.target.value)} className="text-[#a1a1aa]" />
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {
          Object.keys(categories).map((category) => {
            return (
              <CategoryCard
                selected={selectedCategory === category}
                Icon={categories[category]}
                group={category}
                handleFilter={handleFilterByCategory}
                key={category}
              />
            )
          })
        }
      </div> */}
      <List neighbors={filteredNeighbors} />
    </Layout>
  );
};

export default Home;
