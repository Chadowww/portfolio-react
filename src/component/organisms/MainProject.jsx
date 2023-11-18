import * as PropTypes from "prop-types";
import {ExpandebaleBtn} from "../atoms/ExpandebaleBtn";
import {Carousel} from "flowbite-react";
import bgproject from '../../images/bg-project.svg';

export function MainProject() {

    const projects = [
        {
            id: 1,
            name: 'JobItBetter',
            link: 'https://github.com/Chadowww/JobItBetter',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Twig' ,'React' , 'Doctrine', 'Twig', 'Bootstrap', 'Mysql', 'Symfony UX', 'Webpack'],
            message: 'Projet de fin de formation, il a ete repris par la suite pour etre ameliore. Il s\'agit d\'une plateforme de mise en relation entre entreprises et demandeurs d\'emploi. Le projet est en cours de développement. Projet de fin de formation, il a ete repris par la suite pour etre ameliore. Il s\'agit d\'une plateforme de mise en relation entre entreprises et demandeurs d\'emploi. Le projet est en cours de développement.',
        },
        {
            id: 2,
            name: 'Project Certification',
            link: 'https://github.com/Chadowww/Porject_Certification',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Doctrine', 'Twig', 'TailwindCSS', 'PhpUnit', 'Mysql', 'Symfony UX', 'Webpack'],
            message: 'Projet developpe dans le but de passer la certification RNCP. Il s\'agit d\'une plateforme de libraire en ligne. Le projet n\'est pas arrive à sont therme.',
        },
        {
            id: 3,
            name: 'ApiChado',
            link: 'https://github.com/Chadowww/ApiChado',
            techno: ['PHP', 'Symfony', 'Doctrine', 'PhpUnit', 'Mysql', 'API Rest'],
            message: 'Refonte en cours du projet JobItBetter le but etant de travailler comme des projets réel fonctionnant avec un projet front et un projet back et une API pour la communication.',
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
            message: 'Premier projet en POO sans framework php, il s\'agit d\'un reseau social.',
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
            <Carousel indicators={false} slide={false} className={"w-6/12 h-2/5 overflow-hidden"}>
                {projects.map((project, index) =>{
                    return(
                        <div className={"h-full w-full"} key={project.id}>
                            <div className={"w-full flex flex-col justify-end"}>
                                <a href={project.link}><h2 className={"text-center text-4xl font-bold"}> Project: {project.name}</h2></a>
                                <div className={'relative  flex justify-center items-end  w-full min-h-[400px] overflow-hidden'}>
                                    <div className={'p-6 absolute z-50'}>
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