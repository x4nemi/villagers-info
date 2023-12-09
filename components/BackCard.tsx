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

const BackCard: React.FunctionComponent<NeighborCardProps> = ({
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
	}, [Color]);

	return (
		<React.Fragment>
			<div className="relative bg-[#f7f6f3] p-2 rounded-xl flex flex-col items-center group hover:shadow-lg transition-all ease-in delay-100">
				<div style={{
					backgroundColor: color,
					color: TextColor
				}} className="absolute inline-flex items-center w-20 justify-center h-6  shadow-lg rounded-3xl  -top-2 -right-2 rotate-6">
					<span className="text-xs font-bold">{Name}</span>
				</div>

				<div className="relative bg-[#0CC8B9] h-32 w-32 rounded-full border-8 border-[#f7f6f3] ">
					<img className="absolute w-32 md:w-32 lg:w-32 h-32 rounded-xl" src={Image} />
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
				<div className="flex itemsj-center ">
					<p className="italic text-gray-400 text-xs font-normal my-3 px-3 text-center">
						{Saying}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default BackCard;
