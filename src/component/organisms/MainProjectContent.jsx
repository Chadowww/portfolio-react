import background from "../../images/bg-one-project.svg";
import {React, useEffect, useState} from "react";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";
import EmblaCarousel from "../molecules/Carousel";
import {useParams} from "react-router-dom";

export function MainProjectContent() {

    const {id} = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchProject = async () => {
            try{
                const response = await fetch('http://172.20.10.2:3001/project/' + id);
                if (!response.ok) {
                    throw new Error('HTTP Error! status: ' + response.status);
                }
                const data = await response.json();
                setProject(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchProject();
    }, []);

    let mainProjectContent = "w-screen h-screen flex flex-col justify-between items-center overflow-hidden absolute top-0 left-0 z-10 earth-container-project-containt";
    let mainProjecContenttStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: 1,
    };

    const ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    const StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    };
    let backgroundBlur = {
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(1px)',
        WebkitBackdropFilter: 'blur(1px)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
    };
    const SLIDE_COUNT = 5;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    return (
        <div className={mainProjectContent} style={mainProjecContenttStyle}>
            <div style={backgroundBlur}></div>
            <div className="w-fit animate-pulse mt-20 scale-50 md:scale-75 lg:transform-none">
                <div className="flex flex-row-reverse">
                    <div className="w-full h-4 border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">Alexandre Sale</h2>
                </div>
                <div>
                    <h1 className={ClassTitle} style={StyleTitle}>
                        {project.name}
                    </h1>
                </div>
                <div className=" flex">
                    <div className="w-full h-4  border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">AS-Turing</h2>
                </div>
            </div>
            <EmblaCarousel slides={slides} id={id} />
            <div className={'w-full relative flex justify-center m-6 scale-50 md:scale-75 lg:transform-none'}>
                <ExpandebaleBtn message={project.description}/>
            </div>
        </div>
    )
}