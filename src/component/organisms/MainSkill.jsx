import React, {useEffect, useState} from "react";
import {SkillCard} from "../molecules/SkillCard";

function useMediaQuery(query) {
    const mediaQuery = window.matchMedia(query);
    const [match, setMatch] = useState(mediaQuery.matches);

    useEffect(() => {
        const onChange = () => setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", onChange);
        return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);

    return match;
}
export function MainSkill() {
    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    const isMediumScreen = useMediaQuery('(max-width: 768px)');

    let ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    let StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    let StyleTitleSkill = {
        fontFamily: "bebas neue",
        fontSize: isSmallScreen ? "1.5rem" : isMediumScreen ? "3rem" : "4rem",
        fontWeight: "bold",
        color: "#CEB7FF",
    };

    return (
        <div className="flex flex-col justify-around items-center w-full">
            <div className="w-fit animate-pulse scale-50 md:scale-75 lg:transform-none">
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <div className="w-full h-4 border-glow"></div>
                </div>
                <div>
                    <h1 className={ClassTitle} style={StyleTitle}>
                        my skills
                    </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-full h-4  border-glow"></div>
                </div>
            </div>
            <h2 className="uppercase underline" style={StyleTitleSkill}>
                here is a list of my skills
            </h2>
           <div className="w-10/12 md:w-full flex justify-center py-12">
                <SkillCard/>
           </div>
        </div>
    )
}