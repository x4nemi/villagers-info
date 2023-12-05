import * as React from "react";

interface CategoryProps {
  Icon: string;
  group: string;
  handleFilter: (group: string) => void;
  selected: boolean;
}

const CategoryCard: React.FunctionComponent<CategoryProps> = ({
  Icon,
  group,
  handleFilter,
  selected
}) => {
  return (
    <React.Fragment>
      <button onClick={() => handleFilter(group)}>
        <span className={`flex justify-start items-center pl-7 rounded-md hover:bg-gray-100 border-transparent border-4 ${ selected ? 'bg-gray-50 border-purple-200' : 'bg-gray-50' }`}>
          <span>
            <img className="w-16 self-baseline" src={Icon} />
          </span>
          <span>{group}</span>
        </span>
      </button>
    </React.Fragment>
  );
};

export default CategoryCard;
