import React, {useState} from "react";
import ReactCardFlip from 'react-card-flip';
import { Progress } from 'flowbite-react';


export function Card(props) {
    let GridElementClass = "text-center py-6 hover:cursor-pointer w-full";
    let GridElementStyle = {
        background: 'rgba(47, 47, 56, 0.7)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: "25px",
        fontFamily: "montserrat",
    };
    let GridElementClassBack = "text-center py-6 w-full";
    let GridElementStyleBack = {
        background: 'rgba(47, 47, 56, 1)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: "25px",
        fontFamily: "montserrat",
    };

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
        let element = document.getElementById(props.skill.name + "-back");
        let grandParent = element.parentElement.parentElement.parentElement.parentElement.parentElement;
        element.classList.toggle("absolute");
        grandParent.classList.toggle("z-[1000]");
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div id={props.skill.name + "-front"} className={GridElementClass} style={GridElementStyle} onClick={handleClick}>
                {props.skill.name}
                <div className={"px-2"}>
                    <Progress progress={props.skill.value} />
                </div>
            </div>
            <div className="relative">
                <div id={props.skill.name + "-back"} className={GridElementClassBack} style={GridElementStyleBack} onClick={handleClick}>
                    <ul>
                        <li><a href="http://"> test de porjet</a></li>
                        <li><a href="http://"> test de porjet</a></li>
                        <li><a href="http://"> test de porjet</a></li>
                        <li><a href="http://"> test de porjet</a></li>
                        <li><a href="http://"> test de porjet</a></li>
                    </ul>
                </div>
            </div>
        </ReactCardFlip>
    )
}