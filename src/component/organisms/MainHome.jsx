import earth from "../../images/earth.svg";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";

export function MainHome() {

    let ClassTitle = 'text-5xl font-bold text-center font-[DeathStar] text-shadow my-4';
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
                        Bienvenue sur mon portfolio
                    </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-full h-4  border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">AS-Turing</h2>
                </div>
            </div>
            <div className={'flex justify-center items-end p-6 w-full min-h-[450px] '} style={EarthContainer}>
                <div className={''}>
                    <ExpandebaleBtn/>
                </div>
            </div>
        </div>
    )
}