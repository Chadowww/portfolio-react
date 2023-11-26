import {motion} from 'framer-motion';
import {RightSideBar} from "../organisms/RightSideBar";
import {LeftSideBar} from "../organisms/LeftSideBar";
import {MainProjectContent} from "../organisms/MainProjectContent";

export function Project() {

    const pageVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const pageTransition = {
        duration: 3,
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <LeftSideBar/>
            <MainProjectContent/>
            <RightSideBar/>
        </motion.div>
    )
}