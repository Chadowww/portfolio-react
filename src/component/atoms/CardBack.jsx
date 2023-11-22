import React, {useEffect, useState} from "react";

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


export function CardBack(props) {
    const handleClick = props.handleClick;

    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    const isMediumScreen = useMediaQuery('(max-width: 768px)');
    const isLargeScreen = useMediaQuery('(max-width: 1024px)');

    let GridElementClassBack = "text-center py-6 w-full";
    let GridElementStyleBack = {
        background: 'rgba(47, 47, 56, 1)',
        border: '2px solid #CEB7FF',
        color: 'white',
        fontSize: isSmallScreen ? "15px" : isMediumScreen ? "20px" : isLargeScreen ? "20px" : "30px",
        fontFamily: "montserrat",
    };

    const [linkList, setLinkList] = useState([]);

    useEffect(() => {
        const fetchLinkList = async () => {
            try {
                const response = await fetch("http://localhost:3001/skills/projects");
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                const data = await response.json();
                setLinkList(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLinkList();
    }, []);

    return (
        <div className="relative" onClick={handleClick}>
            <div id={props.skill.name + "-back"} className={GridElementClassBack} style={GridElementStyleBack}>
                <ul className={"overflow-hidden"}>
                    {linkList.map((link, index) => {
                        if (link.skill_id === props.skill.id) {
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

    )
}