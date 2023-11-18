import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import scrollSvg from "../../images/scroll.svg";
export function RightSideBar() {

    const[isShow, setIsShow] = useState(true);

    useEffect(() => {
        if (window.location.pathname === "/skill") {
            setIsShow(false);
        }
    }, []);

    let contactClass = "text-1xl md:text-2xl lg:text:4xl font-bold text-center font-[DeathStar] text-shadow animate-pulse";
    let contactStyle = {
        color: "transparent",
        WebkitTextStroke: "1px #CEB7FF",
    };
    let scollClass = "hidden md:block font-bold text-center font-[DeathStar] text-shadow m-12 animate-bounce";
    let scrollStyle = {
        color: "transparent",
        WebkitTextStroke: "1px #CEB7FF",
        opacity: isShow ? 1 : 0,
    };
    return (
        <div className="fixed  top-0 right-0  z-10 h-full bg-yellow flex flex-col justify-between items-end">
            <div className={" w-full m-1 text-right md:text-center md:transform-none"}>
                <a href="/Contact" className={contactClass} style={contactStyle}>contact me</a>
            </div>
            <div className={scollClass} style={scrollStyle}>
                <h3 className={"uppercase"}>scroll</h3>
                <img src={scrollSvg} alt="scroll"/>
            </div>
        </div>
    );
}
RightSideBar.prototype = {
    contactClass: PropTypes.string,
    contactStyle: PropTypes.object,
    scollClass: PropTypes.string,
    scrollStyle: PropTypes.object,
};