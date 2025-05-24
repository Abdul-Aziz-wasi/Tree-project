import React from 'react';

import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';

const DarkMode = () => {
    
    return (
        <div className=' flex justify-end my-4 w-11/12 mx-auto bg-gray-300'>

            
           <Marquee>
             <p className=' font-semibold'>Today : {format(new Date(),"EEEE, MMMM dd ,yyyy")}</p>
           </Marquee>

           
        </div>
    );
};

export default DarkMode;