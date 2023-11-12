import React from 'react'
import {MainSkill} from '../organisms/MainSkill'
import {LeftSideBar} from "../organisms/LeftSideBar";
import {RightSideBar} from "../organisms/RightSideBar";
import background from '../../images/bg-skill.png'
import {motion} from "framer-motion";

export function Skill() {
    let OverlayClass = "h-screen w-full flex justify-between";
    let OverlayStyle = {
        background: 'rgba(47, 47, 56, 0.6)',
    };
    let ClassSkill = "h-screen w-full";
    let StyleSkill = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

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
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className={ClassSkill} style={StyleSkill}>
                <div className={OverlayClass} style={OverlayStyle}>
                    <LeftSideBar/>
                    <MainSkill/>
                    <RightSideBar/>
                </div>
            </div>
            </motion.div>
    )
}