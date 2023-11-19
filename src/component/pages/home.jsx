import * as PropTypes from "prop-types";
import {MainHome} from "../organisms/MainHome";
import {MainProject} from "../organisms/MainProject";
import {RightSideBar} from "../organisms/RightSideBar";
import {LeftSideBar} from "../organisms/LeftSideBar";
import {motion} from "framer-motion";
import React from "react";

function Home() {

    const pageVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const pageTransition = {
        duration: 3,
    };

    return(
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <LeftSideBar/>
            <div style={{background: 'rgba(47, 47, 56, 0.4)',}}>
                <MainHome/>
                <MainProject/>
            </div>
            <RightSideBar/>
        </motion.div>
    );
}

Home.propTypes = {className: PropTypes.string};

export default Home;