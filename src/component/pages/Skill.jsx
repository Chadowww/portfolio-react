import React from 'react'
import {MainSkill} from './molecules/MainSkill'
import {LeftSideBar} from "./molecules/LeftSideBar";
import {RightSideBar} from "./molecules/RightSideBar";
import background from '../images/bg-skill.png'
export function Skill() {
    let OverlayClass = "h-screen w-full flex justify-between";
    let OverlayStyle = {
        background: 'rgba(47, 47, 56, 0.7)',
    };
    let ClassSkill = "h-screen w-full";
    let StyleSkill = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={ClassSkill} style={StyleSkill}>
            <div className={OverlayClass} style={OverlayStyle}>
                <LeftSideBar/>
                <MainSkill/>
                <RightSideBar/>
            </div>
        </div>
    )
}