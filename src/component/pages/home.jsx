import * as PropTypes from "prop-types";
import {MainHome} from "../organisms/MainHome";
import {RightSideBar} from "../organisms/RightSideBar";
import {LeftSideBar} from "../organisms/LeftSideBar";
import background from '../../images/bg-home.png';
import {motion} from "framer-motion";

function Home(props) {
    const ClassHome = ' ' + props.className || '';
    const StyleHome = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const pageVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const pageTransition = {
        duration: 4,
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
                <div className={"h-screen w-full flex "} style={{background: 'rgba(47, 47, 56, 0.4)',}}>
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