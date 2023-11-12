import React from "react";
import {SkillCard} from "../molecules/SkillCard";

export function MainSkill() {
    let ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    let StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    let StyleTitleSkill = {
        fontFamily: "bebas neue",
        fontSize: "50px",
        fontWeight: "bold",
        color: "#CEB7FF",
    };

    return (
        <div className="flex flex-col justify-around items-center w-8/12">
            <div className="w-fit  animate-pulse">
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
           <div className="w-full flex justify-center ">
                <SkillCard/>
           </div>
        </div>
    )
}