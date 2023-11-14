    import React, {useState} from "react";
    import ReactCardFlip from 'react-card-flip';
    import { Progress } from 'flowbite-react';

    const flippedCard = [];
    export function Card(props) {
    let GridElementClass = "text-center py-6 hover:cursor-pointer w-full";
    let GridElementStyle = {
        background: 'rgba(47, 47, 56, 0.7)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: "25px",
        fontFamily: "montserrat",
    };
    let GridElementClassBack = "text-center py-6 w-full";
    let GridElementStyleBack = {
        background: 'rgba(47, 47, 56, 1)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: "25px",
        fontFamily: "montserrat",
    };

    const linkList = [
        {
            name: 'JobItBetter',
            link: 'https://github.com/Chadowww/JobItBetter',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Twig' ,'React' , 'Doctrine', 'Twig', 'Bootstrap', 'Mysql', 'Symfony UX', 'Webpack']
        },
        {
            name: 'Project Certification',
            link: 'https://github.com/Chadowww/Porject_Certification',
            techno: ['HTML', 'CSS', 'PHP','Java Script', 'Symfony', 'Doctrine', 'Twig', 'TailwindCSS', 'PhpUnit', 'Mysql', 'Symfony UX', 'Webpack']
        },
        {
            name: 'ApiChado',
            link: 'https://github.com/Chadowww/ApiChado',
            techno: ['PHP', 'Symfony', 'Doctrine', 'PhpUnit', 'Mysql', 'API Rest']
        },
        {
            name: 'Portfolio-react',
            link: 'https://github.com/Chadowww/portfolio-react',
            techno: ['HTML', 'CSS', 'React', 'TailwindCSS', 'Java Script'] },
        {
            name: 'EarthWindAndWire',
            link: 'https://github.com/WildCodeSchool/2023-02-PHP-Bordeaux-P2-EarthWindAndWire',
            techno: ['HTML', 'CSS', 'PHP' , 'Java Script', 'Bootstrap', 'Mysql'] },
        {
            name: 'DHM',
            link: 'https://github.com/Chadowww/DHM',
            techno: ['HTML', 'CSS', 'PHP' , 'Laravel', 'Vue.JS', 'TailwindCSS', 'Webpack'] },
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
                    <Progress progress={props.skill.value} />
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