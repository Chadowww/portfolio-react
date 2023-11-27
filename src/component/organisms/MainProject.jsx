import * as PropTypes from "prop-types";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";
import {Carousel} from "flowbite-react";
import background from "../../images/bg-project.svg";
import React, {useEffect} from "react";

export function MainProject() {
    const [projects, setProject] = React.useState([]);

    useEffect(() => {
        const fetchProject = async () => {
          try{
              const response = await fetch('http://172.20.10.2:3001/projects');
              if (!response.ok) {
                  throw new Error(response.statusText);
              }
              const data = await response.json();
              setProject(data)
          } catch (error) {
              console.log(error);
          }
        };
        fetchProject();
    }, []);

    let ClassProject = 'w-screen h-screen flex flex-col justify-between items-center absolute top-0 left-0 z-0 earth-container-project overflow-hidden';
    let StyleProject = {
        backgroundColor: '#2D0056',
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    const StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    return (
        <div className={ClassProject} style={StyleProject}>
            <div className=""></div>
            <div className="w-fit animate-pulse scale-50 md:scale-75 lg:transform-none">
                <div className="flex flex-row-reverse">
                    <div className="w-full h-4 border-glow"></div>
                </div>
                <div>
                    <h1 className={ClassTitle} style={StyleTitle}>
                        My projects
                    </h1>
                </div>
                <div className="flex">
                    <div className="w-full h-4  border-glow"></div>
                </div>
            </div>
            <Carousel indicators={false} slide={false} className={"relative w-full md:w-7/12 h-4/6 md:h-2/5 overflow-hidden"}>
                {projects.map((project) =>{
                    return(
                        <div className={"h-full w-full"} key={project.id}>
                            <div className={"w-full h-full flex flex-col justify-end"}>
                                <a href={"/project/" + project.id }><h2 className={"text-center text-4xl font-bold"}> Project: {project.name}</h2></a>
                                <div className={'relative  flex justify-center items-end  w-full min-h-[300px] md:min-h-[360px] overflow-hidden'}>
                                    <div className={'ExcludeScroll w-full relative flex justify-center m-6 scale-50 md:scale-75 lg:transform-none'}>
                                        <ExpandebaleBtn message={project.description}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
MainProject.prototype = {
    ClassTitle: PropTypes.string,
    StyleTitle: PropTypes.object,
    EarthContainer: PropTypes.object,
}