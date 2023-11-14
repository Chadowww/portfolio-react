import earth from "../../images/earth.svg";
import * as PropTypes from "prop-types";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";

export function MainHome() {

    let ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    let StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    let EarthContainer = {
        backgroundImage: `url(${earth})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
    };

    return (
        <div className="relative w-8/12 h-full flex flex-col justify-between items-center overflow-hidden">
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
            <div className={'flex relative justify-center items-end  w-full min-h-[450px] '} >
                <div className={"absolute w-full h-full"} style={EarthContainer}></div>
                <div className={''}>
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