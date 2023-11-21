    import React, {useEffect, useState} from "react";
    import * as PropTypes from "prop-types";
    import ReactCardFlip from 'react-card-flip';
    import { Progress } from 'flowbite-react';
    function useMediaQuery(query) {
        const mediaQuery = window.matchMedia(query);
        const [match, setMatch] = useState(mediaQuery.matches);

        useEffect(() => {
            const onChange = () => setMatch(mediaQuery.matches);
            mediaQuery.addEventListener("change", onChange);
            return () => mediaQuery.removeEventListener("change", onChange);
        }, [mediaQuery]);

        return match;
    }

    const flippedCard = [];
    export function Card(props) {
    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    const isMediumScreen = useMediaQuery('(max-width: 768px)');
    const isLargeScreen = useMediaQuery('(max-width: 1024px)');

    let GridElementClass = "text-center py-6 hover:cursor-pointer w-full";
    let GridElementStyle = {
        background: 'rgba(47, 47, 56, 0.7)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: isSmallScreen ? "15px" : isMediumScreen ? "20px" : isLargeScreen ? "20px" : "30px",
        fontFamily: "montserrat",
    };
    let GridElementClassBack = "text-center py-6 w-full";
    let GridElementStyleBack = {
        background: 'rgba(47, 47, 56, 1)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: isSmallScreen ? "15px" : isMediumScreen ? "20px" : isLargeScreen ? "20px" : "30px",
        fontFamily: "montserrat",
    };

    const linkList = [
        {
            name: 'JobItBetter',
            link: 'https://github.com/Chadowww/JobItBetter',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Twig' ,'React' , 'Doctrine', 'Twig', 'Bootstrap', 'Mysql', 'Symfony UX', 'Webpack'],
            message: 'Projet démarré comme un projet de fin de formation, il a été repris par la suite pour être amélioré et terminé. Il s\'agit d\'une plateforme de mise en relation entre des entreprises et des demandeurs d\'emploi. Le projet est en cours de développement.',
        },
        {
            name: 'Project Certification',
            link: 'https://github.com/Chadowww/Porject_Certification',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Doctrine', 'Twig', 'TailwindCSS', 'PhpUnit', 'Mysql', 'Symfony UX', 'Webpack'],
            message: 'Projet démarré dans le but de passer la certification RNCP. Il s\'agit d\'une plateforme de libraire en ligne. Le projet n\'est pas arrivé à sont therme.',
        },
        {
            name: 'ApiChado',
            link: 'https://github.com/Chadowww/ApiChado',
            techno: ['PHP', 'Symfony', 'PhpUnit', 'Mysql', 'API Rest'],
            message: 'Refonte en cours du projet JobItBetter le but étant de travailler comme des projets réel fonctionnant avec un projet front et un projet back et une API pour la communication.',
        },
        {
            name: 'Portfolio-react',
            link: 'https://github.com/Chadowww/portfolio-react',
            techno: ['HTML', 'CSS', 'React', 'TailwindCSS', 'Java Script'],
            message: 'Projet de portfolio réalisé en React actuellement en développement.',
        },
        {
            name: 'EarthWindAndWire',
            link: 'https://github.com/WildCodeSchool/2023-02-PHP-Bordeaux-P2-EarthWindAndWire',
            techno: ['HTML', 'CSS', 'PHP' , 'Java Script', 'Bootstrap', 'Mysql'],
            message: 'Premier projet en POO sans framework php, il s\'agit d\'un reseau social.',
        },
        {
            name: 'DHM',
            link: 'https://github.com/Chadowww/DHM',
            techno: ['HTML', 'CSS', 'PHP' , 'Laravel', 'Vue.JS', 'TailwindCSS', 'Webpack'],
            message: 'Projet de site vitrine pour un client, il s\'agit d\'un site de maintenant et de vente informatique.',
        },
    ];

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        let lastCard = flippedCard[flippedCard.length - 1];

        if (flippedCard.length > 0 && lastCard !== props.skill.name) {
            const previousCard = document.getElementById(lastCard + "-back");
            previousCard.click()
            flippedCard.splice(0, flippedCard.length);
        }

        setIsFlipped(!isFlipped);
        let element = document.getElementById(props.skill.name + "-back");
        let grandParent = element.parentElement.parentElement.parentElement.parentElement.parentElement;
        element.classList.toggle("absolute");
        grandParent.classList.toggle("z-[1000]");

        if (isFlipped === false){
            flippedCard.push(props.skill.name);
        }
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div id={props.skill.name + "-front"} className={GridElementClass} style={GridElementStyle} onClick={handleClick}>
                {props.skill.name}
                <div className={"px-2"}>
                    <Progress progress={props.skill.performance} />
                </div>
            </div>
            <div className="relative">
                <div id={props.skill.name + "-back"} className={GridElementClassBack} style={GridElementStyleBack} onClick={handleClick}>
                    <ul className={"overflow-hidden"}>
                        {linkList.map((link, index) => {
                            if (link.techno.includes(props.skill.name)) {
                                return (
                                    <li key={index}>
                                        <a href={link.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>{link.name}</a>
                                    </li>
                                )
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </ReactCardFlip>
    )
}

Card.prototype = {
    skill: PropTypes.object.isRequired,
}