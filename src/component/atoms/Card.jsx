    import React, {useState} from "react";
    import * as PropTypes from "prop-types";
    import ReactCardFlip from 'react-card-flip';
    import { CardFront } from "./CardFront";
    import { CardBack } from "./CardBack";

    const flippedCard = [];
export function Card(props) {

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
            <CardFront skill={props.skill} handleClick={handleClick}/>
            <CardBack skill={props.skill} handleClick={handleClick}/>
        </ReactCardFlip>
    )
}

Card.prototype = {
    skill: PropTypes.object.isRequired,
}