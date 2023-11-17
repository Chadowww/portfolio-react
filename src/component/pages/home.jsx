import * as PropTypes from "prop-types";
import {MainHome} from "../organisms/MainHome";
import {MainProject} from "../organisms/MainProject";
import {RightSideBar} from "../organisms/RightSideBar";
import {LeftSideBar} from "../organisms/LeftSideBar";
import {animate, motion, useAnimation} from "framer-motion";
import {Particle} from "../templates/Particles";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Home() {

    const pageVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const pageTransition = {
        duration: 5,
    };

    return(
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Particle />
            <LeftSideBar/>
            <div className={""} style={{background: 'rgba(47, 47, 56, 0.4)',}}>
                <MainHome/>
                <MainProject/>
            </div>
            <RightSideBar/>
        </motion.div>
    );
}

Home.propTypes = {className: PropTypes.string};

export default Home;