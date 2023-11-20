import * as PropTypes from "prop-types";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";
import background from "../../images/bg-home.svg";
import React, {useRef} from "react";
import {Particle} from "../templates/Particles";

export function MainHome() {

    const main = useRef();

    const ClassHome = 'w-screen h-screen flex flex-col justify-between items-center overflow-hidden absolute top-0 left-0 z-10 earth-container-home';
    const StyleHome = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: 1,
    }

    const ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    const StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    let message = "My goal is to turn your ideas into digital reality. I focus on code quality, security, and efficiency, and I am capable of managing all aspects of your code design.";

    window.addEventListener('wheel', (e) => {
        const delta = Math.sign(e.deltaY);
        const container= main.current;
        if (container) {
            let currentOpacity = parseFloat(container.style.opacity);

            if (delta === 1 && currentOpacity >= 0.01) {
                currentOpacity -= 0.02;
                if (currentOpacity <= 0.3) {
                    container.style.display = 'none';
                }
            }

            if (delta === -1 && currentOpacity <= 1) {
                currentOpacity += 0.02;
                if (currentOpacity >= 0.03) {
                    container.style.display = 'flex';
                }
            }

            container.style.opacity = currentOpacity.toString();
            console.log(container.style.opacity);
        }
    })
    let startY;
    let startX;
    window.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
    });

    window.addEventListener('touchmove', (e) => {
        const container = main.current;
        if (container) {
            const deltaY = e.touches[0].clientY - startY;
            const currentOpacity = parseFloat(container.style.opacity) || 1;

            if (deltaY < 10 && currentOpacity >= 0.01) {
                // Swipe vers le bas
                container.style.opacity = (currentOpacity - 0.02).toString();
                if (currentOpacity <= 0.03) {
                    container.style.display = 'none';
                }
            }

            if (deltaY > -10 && currentOpacity <= 1) {
                // Swipe vers le haut
                container.style.display = 'flex';
                container.style.opacity = (currentOpacity + 0.02).toString();
            }
            console.log(startY + ' StartY ');
            console.log(startX + ' StartX ')
        }
    });

    return (
        <div className={ClassHome} style={StyleHome} ref={main}>
            <Particle />
            <div className="hidden md:block"></div>
            <div className="w-fit animate-pulse scale-50 md:scale-75 lg:transform-none">
                <div className="flex flex-row-reverse">
                    <div className="w-full h-4 border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">Alexandre Sale</h2>
                </div>
                <div>
                    <h1 className={ClassTitle} style={StyleTitle}>
                        welcome to my portfolio
                    </h1>
                </div>
                <div className=" flex">
                    <div className="w-full h-4  border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">AS-Turing</h2>
                </div>
            </div>
            <div className={'w-full relative flex justify-center m-6 scale-50 md:scale-75 lg:transform-none'}>
                <ExpandebaleBtn message={message}/>
            </div>
        </div>
    )
}
MainHome.prototype = {
    ClassTitle: PropTypes.string,
    StyleTitle: PropTypes.object,
    EarthContainer: PropTypes.object,
}
