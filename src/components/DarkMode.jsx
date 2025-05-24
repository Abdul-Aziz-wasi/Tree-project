import React from 'react';
import { useDarkMode } from '../context/ThemeContext';

const DarkMode = () => {
    const darkMode =false;
    const{dark, setDark}= useDarkMode()
    return (
        <div className=' flex justify-center mb-4'>

            
            <button onClick={()=>setDark(!dark)} className='btn bg-gray-400 dark:bg-gray-900 dark:text-white'>
                {
                    darkMode? "Light mode":"Dark mode"
                }
            </button>
        </div>
    );
};

export default DarkMode;