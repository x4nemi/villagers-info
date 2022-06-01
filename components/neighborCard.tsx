import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";

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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div className="bg-[#F7F6F3] p-2 rounded-xl shadow-md flex flex-col items-center">
        <span
        // role={"img"} aria-label={Icon}
        >
          <img className="w-16 md:w-32 lg:w-full" src={Icon} />
        </span>
        <h3 className="font-bold text-gray-700">{Name}</h3>
        <button
          className="text-blue-500  text-sm pt-3"
          onClick={() => setIsOpen(true)}
        >
          villager info
        </button>
      </div>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 text-gray-900"
                >
                  {Name.toUpperCase()}
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex justify-center">
                    <img className="w-16 md:w-32 lg:w-full" src={Icon} />
                  </div>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Name:</span> {Name}{" "}
                  </p>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Personality:</span>{" "}
                    {Personality}{" "}
                  </p>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Species:</span> {Species}{" "}
                  </p>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Gender:</span> {Gender}{" "}
                  </p>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Birthday:</span> {Birthday}{" "}
                  </p>
                  {/* <p className="text-md text-gray-500 mb-2">
                    {' '}
                    <span className="font-bold">Subgroup:</span> {subgroup}{' '}
                  </p> */}
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default NeighborCard;
