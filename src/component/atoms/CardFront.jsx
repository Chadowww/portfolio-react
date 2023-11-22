import {Progress} from "flowbite-react";
import React, {useEffect, useState} from "react";

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

export function CardFront(props) {
    const handleClick = props.handleClick;

    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    const isMediumScreen = useMediaQuery('(max-width: 768px)');
    const isLargeScreen = useMediaQuery('(max-width: 1024px)');

    let GridElementClass = "text-center py-6 hover:cursor-pointer w-full";
    let GridElementStyle = {
        background: 'rgba(47, 47, 56, 0.7)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: isSmallScreen ? "15px" : isMediumScreen ? "20px" : isLargeScreen ? "20px" : "30px",
        fontFamily: "montserrat",
    };

    return (
        <div id={props.skill.name + "-front"} className={GridElementClass} style={GridElementStyle} onClick={handleClick} >
            {props.skill.name}
            <div className={"px-2"}>
                <Progress progress={props.skill.performance} />
            </div>
        </div>
    )
}