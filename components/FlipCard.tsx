// import React, { useState } from 'react';

// interface FlipCardProps {
//     frontContent: React.ReactNode;
//     backContent: React.ReactNode;
// }

// const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
//     return (
//         <div
//             className="w-52 group perspective"
//         >
//             <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
//                 <div className='absolute backface-hidden w-full h-full'>
//                     {frontContent}
//                 </div>
//                 <div
//                     className="flex flex-col overflow-hidden absolute my-rotate-y-180 items-center justify-center h-full px-2 pb-24"
//                 >
//                     {backContent}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FlipCard;

// import React from 'react';

// interface FlipCardProps {
//   frontContent: React.ReactNode;
//   backContent: React.ReactNode;
// }

// const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
//   return (
//     <div className="w-52 group perspective">
//       <div className='relative preserve-3d w-full h-full group-hover:my-rotate-y-180 duration-1000'>
//         <div className='absolute backface-hidden w-full h-full'>
//           {frontContent}
//         </div>
//         <div className="flex flex-col overflow-hidden absolute my-rotate-y-180 items-center justify-center h-full px-2 pb-24">
//           {backContent}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCard;


import React from 'react';

interface FlipCardProps {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {frontContent}
                </div>
                <div className="flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;

