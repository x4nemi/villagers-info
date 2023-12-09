

import React from 'react';
import { realNeighbors } from '../utils/utils';


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

const FlipChidoCard: React.FunctionComponent<NeighborCardProps> = ({
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
    Color: color,
    TextColor,
}) => {
    return (
        <div className="flip-card  ">
            <div className="flip-card-inner flex relative rounded-xl flex-col items-center group hover:shadow-lg transition-all ease-in delay-100">
                <div className="flip-card-front flex-col bg-[#FFFAE4] rounded-xl">
                    <div style={{
                        backgroundColor: color,
                        color: TextColor
                    }} className="absolute inline-flex items-center w-28 justify-center h-8  shadow-lg rounded-3xl -inset-0 -top-2 -left-2 -rotate-6">
                        <span className="text-base font-bold">{Name}</span>
                    </div>
                    <div className="relative bg-[#E6E6CC] h-36 w-36 rounded-full border-8 border-[#FAFAD8]">
                        <img className="absolute w-full h-full " src={Icon} loading='lazy' />
                    </div>
                    <div className="flex items-center ">
                        <p className="italic text-[#666848] text-sm font-light mb-1 px-7 text-center">
                            {Saying}
                        </p>
                    </div>
                </div>
                <div className="flip-card-back rounded-xl flex-col bg-[#FCF9DE] mb-3">
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-3/4 h-px bg-[#B5B3B6] border-0" />
                        <span className="absolute px-3 text-xs text-[#B5B3B6] -translate-x-1/2 left-1/2 bg-[#FCF9DE] font-medium">PASSPORT</span>
                    </div>
                    <div className='flex p-2 w-full items-center bg-[#E6EFDD] mt-3'>
                        <div className="relative h-32 w-32 flex mr-3">
                            <img className="absolute h-full rounded-3xl border-8 border-[#FCFBE4]" src={Image}
                            loading='lazy'
                            />
                        </div>
                        <div className="flex-col ">
                            <span className="justify-self-center bg-[#FCFAE4] text-[#9F9781] text-base font-medium me-2 px-2.5 py-0.5 rounded">{Name}</span>
                            <ul className="space-y-1 text-[#666848] list-inside">
                                <li className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='mr-1' fill="#EFAA4B" viewBox="0 0 256 256"><path d="M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"></path></svg>
                                    {CatchPhrase}
                                </li>
                                <li className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='mr-1' fill="#fcd34d" viewBox="0 0 256 256"><path d="M243.84,76.19a12.08,12.08,0,0,0-13.34-1.7l-50.21,25L138.37,29.86a12.11,12.11,0,0,0-20.74,0L75.71,99.52l-50.19-25A12.11,12.11,0,0,0,8.62,89.12l37,113.36a8,8,0,0,0,11.68,4.4C57.55,206.73,83.12,192,128,192s70.45,14.73,70.68,14.87a8,8,0,0,0,11.71-4.39l37-113.33A12.06,12.06,0,0,0,243.84,76.19Zm-68,80.61a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12,228.2,228.2,0,0,0-77.22,0,8,8,0,0,1-2.78-15.76,244.42,244.42,0,0,1,82.78,0A8,8,0,0,1,175.88,156.8Z"></path></svg>
                                    {Species}
                                </li>
                                <li className="flex items-center text-sm ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='mr-1' fill="#80C4BA" viewBox="0 0 256 256"><path d="M208,88H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24V112A24,24,0,0,0,208,88ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0Zm104,87.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33V112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z"></path></svg>
                                    {Birthday}
                                </li>
                                <li className="flex items-center text-sm ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='mr-1' fill="#f87171" viewBox="0 0 256 256"><path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path></svg>
                                    {Hobby}
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FlipChidoCard;