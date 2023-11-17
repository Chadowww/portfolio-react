import * as PropTypes from "prop-types";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";
import bgproject from '../../images/bg-project.svg';

export function MainProject() {
    let ClassProject = 'w-screen h-screen flex flex-col justify-between items-center absolute top-0 left-0 z-0';
    let StyleProject = {
        backgroundColor: '#2D0056',
        backgroundImage: `url(${bgproject})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    let ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    let StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    return (
        <div className={ClassProject} style={StyleProject}>
            <div></div>
            <div className="w-fit animate-pulse">
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <div className="w-full h-4 border-glow"></div>
                </div>
                <div>
                    <h1 className={ClassTitle} style={StyleTitle}>
                        My projects
                    </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-full h-4  border-glow"></div>
                </div>
            </div>
            <div className={'relative earth-container-project flex justify-center items-end  w-full min-h-[400px] overflow-hidden'}>
                <div className={'p-6 absolute z-10'}>
                    <ExpandebaleBtn/>
                </div>
            </div>
        </div>
    )
}
MainProject.prototype = {
    ClassTitle: PropTypes.string,
    StyleTitle: PropTypes.object,
    EarthContainer: PropTypes.object,
}