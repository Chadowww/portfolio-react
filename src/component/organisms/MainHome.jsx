import * as PropTypes from "prop-types";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";
import background from "../../images/bg-home.svg";
import React, {useRef} from "react";

export function MainHome(props) {

    const main = useRef();
    let ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    let StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    const ClassHome = 'w-screen h-screen flex flex-col justify-between items-center overflow-hidden absolute top-0 left-0 z-10';
    const StyleHome = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: 1,
    }
    window.addEventListener('wheel', (e) => {
        const delta = Math.sign(e.deltaY);
        const container= main.current;
        if (container) {
            let currentOpacity = parseFloat(container.style.opacity);

            if (delta === 1 && currentOpacity >= 0.01) {
                currentOpacity -= 0.007;
            }

            if (delta === -1 && currentOpacity <= 1) {
                currentOpacity += 0.007;
            }

            container.style.opacity = currentOpacity.toString();
            console.log(container.style.opacity);
        }
    })
    return (
        <div className={ClassHome} style={StyleHome} ref={main}>
            <div></div>
            <div className="w-fit animate-pulse">
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <div className="w-full h-4 border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">Alexandre Sale</h2>
                </div>
                <div>
                    <h1 className={ClassTitle} style={StyleTitle}>
                        welcome to my portfolio
                    </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-full h-4  border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">AS-Turing</h2>
                </div>
            </div>
            <div className={'relative earth-container-home flex justify-center items-end  w-full min-h-[400px]'}>
                <div className={'p-6 absolute z-10'}>
                    <ExpandebaleBtn/>
                </div>
            </div>
        </div>
    )
}
MainHome.prototype = {
    ClassTitle: PropTypes.string,
    StyleTitle: PropTypes.object,
    EarthContainer: PropTypes.object,
}
