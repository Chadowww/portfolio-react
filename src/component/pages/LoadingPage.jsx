import {motion} from "framer-motion";
import earthAlone from "../../images/earthAlone.svg";
import React from "react";

export default function LoadingPage() {
    const pageVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const pageTransition = {
        duration: 4,
    };

    return (
        <motion.div
            className="loader"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="loader-container">
                <div className="spinner w-6/12">
                    <img src={earthAlone} alt=""/>
                </div>
            </div>
        </motion.div>
    )
}