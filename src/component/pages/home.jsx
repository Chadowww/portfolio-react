import * as PropTypes from "prop-types";
import {MainHome} from "../organisms/MainHome";
import {RightSideBar} from "../organisms/RightSideBar";
import {LeftSideBar} from "../organisms/LeftSideBar";
import background from '../../images/bg-home.svg';
import {motion} from "framer-motion";
import {Particle} from "../templates/Particles";
import React from "react";

function Home() {
    const ClassHome = ' relative';
    const StyleHome = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
    }

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
            <div className={ClassHome} style={StyleHome}>
                <Particle />
                <div className={"h-screen w-full flex relative"} style={{background: 'rgba(47, 47, 56, 0.4)',}}>
                    <LeftSideBar/>
                    <MainHome/>
                    <RightSideBar/>
                </div>
            </div>
        </motion.div>
    );
}

Home.propTypes = {className: PropTypes.string};

export default Home;