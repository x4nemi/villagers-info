import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { isBirthday } from "../utils/utils";

export interface NeighborCardProps {
	ID: number;
	Name: string;
	Personality: string;
	Birthday: string;
	Species: string;
	Gender: string;
	Hobby: string;
	Image: string;
	Icon: string;
	CatchPhrase: string;
	Saying: string;
}

const NeighborCard: React.FunctionComponent<NeighborCardProps> = ({
	ID,
	Name,
	Personality,
	Birthday,
	Species,
	Gender,
	Hobby,
	Image,
	Icon,
	CatchPhrase,
	Saying,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isTbirthday, setIsTbirthday] = React.useState(false);

	React.useEffect(() => {
		setIsTbirthday(isBirthday(Birthday));
	}, [Birthday]);
	return (
		<React.Fragment>
			<div className="bg-[#F7F6F3] p-2 rounded-xl shadow-md flex flex-col items-center relative">
				<span>
					<img className="w-16 md:w-32 lg:w-full" src={Icon} />
				</span>

				{isTbirthday ? (
					<div className="absolute top-0 right-0 mr-2 mt-2">
						<img
							className="w-8"
							src={
								"https://dodo.ac/np/images/4/4c/Present_Delivery_NH_Inv_Icon.png"
							}
							title="Today is their birthday!"
						/>
					</div>
				) : null}
				<h3 className="font-bold text-gray-700">{Name}</h3>
				<p className="italic text-gray-400 text-xs font-normal text-center">
					“{Saying}”
				</p>
				<button
					className="text-blue-500  text-sm pt-3"
					onClick={() => setIsOpen(true)}
				>
					<div className="static">
						<div className="">
							<img
								className="w-10"
								src={
									"https://izapislewska.weebly.com/uploads/4/9/8/6/49862713/passport.png"
								}
							/>
						</div>
					</div>
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
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-teal-50 shadow-2xl rounded-2xl ">
								<Dialog.Title
									as="h3"
									className="text-xl text-center font-medium leading-6 text-gray-900 justify-between flex items-center"
								>
									{Name}
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-teal-600 bg-teal-100 border border-transparent rounded-md hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
										onClick={() => setIsOpen(false)}
									>
										X
									</button>
								</Dialog.Title>
								<div className="mt-2 justify-center">
									<div className="flex justify-center m-10 border-10 border-[#FBF6DC]">
										<img className="w-32 rounded-lg shadow-sm" src={Image} />
									</div>
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
