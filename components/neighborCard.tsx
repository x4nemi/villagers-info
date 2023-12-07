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
	Color?: string;
	TextColor?: string;
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
	Color,
	TextColor,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isTbirthday, setIsTbirthday] = React.useState(false);
	const [color, setColor] = React.useState(Color);

	React.useEffect(() => {
		setIsTbirthday(isBirthday(Birthday));
	}, [Birthday]);

	React.useEffect(() => {
		setColor(Color);
	}
		, [Color]);
	// console.log(Color);

	return (
		<React.Fragment>
			<div className="bg-[#f7f6f3] p-2 rounded-xl flex flex-col items-center relative hover:shadow-lg transition-all ease-in delay-100">
				<div style={{
					backgroundColor: color,
					color: TextColor
				}} className="absolute inline-flex items-center w-20 justify-center h-6  shadow-lg rounded-3xl -inset-0 -top-2 -left-2 -rotate-6">
					<span className="text-xs font-bold">{ Name }</span>
					</div> 

				 <div className="relative bg-[#0CC8B9] h-32 w-32 rounded-full border-8 border-[#f7f6f3] ">
					<img className="absolute w-16 md:w-32 lg:w-32 h-32 bg-contain" src={Icon} />
				</div>

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
				<div className="flex items-center ">
					<p className="italic text-gray-400 text-xs font-normal my-3 px-3 text-center">
						{Saying}
					</p>
				</div>
			</div>
			{/* <Transition appear show={isOpen} as={React.Fragment}>
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
			</Transition> */}
		</React.Fragment>
	);
};

export default NeighborCard;
