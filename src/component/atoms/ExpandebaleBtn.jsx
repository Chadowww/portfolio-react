import React, {useState } from "react";
import vector1 from "../../images/vector/Vector1.svg";
import vector2 from "../../images/vector/Vector2.svg";

export function ExpandebaleBtn() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const ClassTitle = "text-5xl font-bold text-center font-[DeathStar] text-shadow";
    const StyleTitle = {
        color: "transparent",
        WebkitTextStroke: "1px #CEB7FF",
        transition: isOpen ? "width 1s, height 1s, opacity 1s" : "width 1s , height 1s, transform 1s",
        transform: isOpen ? "scale(0)" : "scale(1)",
        hidden: isOpen ? "opacity 0" : "opacity 1",
        opacity: isOpen ? 0 : 1,
        width: isOpen ? "0" : "auto",
        height: isOpen ? "0" : "auto",
    };

    const StyleSpitch = {
        // display: isOpen ? "inline" : "none",
        height: isOpen ? "200px" : "0",
        width: isOpen ? "750px" : "0",
        fontFamily: "DeathStar",
        fontSize: "25px",
        color: "#CEB7FF",
        border: "3px solid #CEB7FF",
        background: 'rgba(47, 47, 56, 0.7)',
        transition: isOpen ? "height 1s, width 1s, display 1s" : "height 1s , width 1s, display 1s",
        transform: isOpen ? "scale(1)" : "scale(0)",
    };
    let containerExpandebale = {
        transition: isOpen ? "width 1s, height 1s" : "width 1s , height 1s",
        // width: isOpen ? "750px" : "auto",
    };
    return (
        <div
            className={"w-fit h-fit p-8 relative cursor-pointer justify-center items-center"}
            style={containerExpandebale}
            onClick={handleClick}
        >
            <div className={"absolute top-[0] left-[0] col-start-1 col-end-12"}>
                <img src={vector1} alt="vector1" className={""} />
            </div>
            <div className={"flex justify-center items-center"} >
                <h2 className={ClassTitle} style={StyleTitle}>
                    CLICK <br /> TO OPEN
                </h2>
                <span className={"overflow-hidden text-center p-6 spitch"} style={StyleSpitch}>
                    Mon objectif est de transformer vos idees en realite numerique. Je suis axe sur la qualite du code,
                    la securite et l'efficacite, et je suis capable de gerer tous les aspects de la conception de votre code.
                </span>
            </div>
            <div className={"absolute bottom-[0] right-[0] col-start-1 col-end-12 justify-end"}>
                <img src={vector2} alt="vector2" className={""} />
            </div>
        </div>
    );
}
