import * as PropTypes from "prop-types";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";
import {Carousel} from "flowbite-react";
import background from "../../images/bg-project.svg";
import {Particle} from "../templates/Particles";
import React from "react";

export function MainProject() {

    const projects = [
        {
            id: 1,
            name: 'JobItBetter',
            link: 'https://github.com/Chadowww/JobItBetter',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Twig' ,'React' , 'Doctrine', 'Twig', 'Bootstrap', 'Mysql', 'Symfony UX', 'Webpack'],
            message: 'Project de fin de formation, il a ete repris par la suite pour etre ameliore. Il s\'agit d\'une plateforme de mise en relation entre entreprises et demandeurs d\'emploi. Le Projet est en cours de développement. Projet de fin de formation, il a ete repris par la suite pour etre ameliore. Il s\'agit d\'une plateforme de mise en relation entre entreprises et demandeurs d\'emploi. Le Projet est en cours de développement.',
        },
        {
            id: 2,
            name: 'Project Certification',
            link: 'https://github.com/Chadowww/Porject_Certification',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Doctrine', 'Twig', 'TailwindCSS', 'PhpUnit', 'Mysql', 'Symfony UX', 'Webpack'],
            message: 'Projet developpe dans le but de passer la certification RNCP. Il s\'agit d\'une plateforme de libraire en ligne. Le Projet n\'est pas arrive à sont therme.',
        },
        {
            id: 3,
            name: 'ApiChado',
            link: 'https://github.com/Chadowww/ApiChado',
            techno: ['PHP', 'Symfony', 'Doctrine', 'PhpUnit', 'Mysql', 'API Rest'],
            message: 'Refonte en cours du Projet JobItBetter le but etant de travailler comme des Projets réel fonctionnant avec un Projet front et un Projet back et une API pour la communication.',
        },
        {
            id: 4,
            name: 'Portfolio-react',
            link: 'https://github.com/Chadowww/portfolio-react',
            techno: ['HTML', 'CSS', 'React', 'TailwindCSS', 'Java Script'],
            message: 'Projet de portfolio realise en React actuellement en developpement.',
        },
        {
            id: 5,
            name: 'EarthWindAndWire',
            link: 'https://github.com/WildCodeSchool/2023-02-PHP-Bordeaux-P2-EarthWindAndWire',
            techno: ['HTML', 'CSS', 'PHP' , 'Java Script', 'Bootstrap', 'Mysql'],
            message: 'Premier Projet en POO sans framework php, il s\'agit d\'un reseau social.',
        },
        {
            id: 6,
            name: 'DHM',
            link: 'https://github.com/Chadowww/DHM',
            techno: ['HTML', 'CSS', 'PHP' , 'Laravel', 'Vue.JS', 'TailwindCSS', 'Webpack'],
            message: 'Projet de site vitrine pour un client, il s\'agit d\'un site de maintenant et de vente informatique.',
        },
    ];

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
                                <a href={project.link}><h2 className={"text-center text-4xl font-bold"}> Project: {project.name}</h2></a>
                                <div className={'relative  flex justify-center items-end  w-full min-h-[300px] md:min-h-[400px] overflow-hidden'}>
                                    <div className={'w-full relative flex justify-center m-6 scale-50 md:scale-75 lg:transform-none'}>
                                        <ExpandebaleBtn message={project.message}/>
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