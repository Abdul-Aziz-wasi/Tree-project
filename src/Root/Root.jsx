import React from 'react';
import { Outlet } from 'react-router';
import Navabr from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, scale } from "motion/react"

const Root = () => {
    return (
        <motion.div
         initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
        >
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Footer></Footer>
        </motion.div>
    );
};

export default Root;