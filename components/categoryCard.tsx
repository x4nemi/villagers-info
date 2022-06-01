import * as React from "react";

interface CategoryProps {
  Icon: string;
  group: string;
  handleFilter: (group: string) => void;
}

const CategoryCard: React.FunctionComponent<CategoryProps> = ({
  Icon,
  group,
  handleFilter,
}) => {
  return (
    <React.Fragment>
      <button onClick={() => handleFilter(group)}>
        <span className="flex justify-start items-center pl-7 rounded-md bg-gray-50 py-2 hover:bg-gray-100">
          <span>
            <img className="w-8 md:w-16 lg:w-32 self-baseline" src={Icon} />
          </span>
          <span>{group}</span>
        </span>
      </button>
    </React.Fragment>
  );
};

export default CategoryCard;
