import React from "react";
import vector1 from "../../images/vector/Vector1.svg";
import vector2 from "../../images/vector/Vector2.svg";
import {useEffect, useState} from "react";

export function ExpandebaleBtn() {

    const [spitchWidth, setSpitchWidth] = useState(0);
        useEffect(() => {
            const spitch = document.querySelector('.spitch');
            const handleTransitionEnd = () => {
                setTimeout(() => {
                    const width = spitch.getBoundingClientRect().width;
                    if (width > 50) { // Remplacez 50 par la largeur à laquelle vous voulez que le code soit exécuté
                       spitch.classList.remove('hidden')
                    }
                }, 1000); // Remplacez 1000 par le temps en millisecondes après lequel vous voulez que le code soit exécuté
            };
            spitch.addEventListener('transitionend', handleTransitionEnd);
            return () => {
                spitch.removeEventListener('transitionend', handleTransitionEnd);
            };
        }, []);

        let ClassTitle = 'text-5xl font-bold text-center font-[DeathStar] text-shadow';
    let StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }

    let StyleSpitch = {
        transition: "width 1s, height 1s",
    };
    function openSpitch() {
        let spitch = document.querySelector('.spitch');
        let button = document.querySelector('.button-open');

        if (spitch.classList.contains('w-0')) {
            spitch.classList.remove('w-0');
            spitch.classList.remove('h-0');
            spitch.classList.add('w-96');
            spitch.classList.add('h-24');
            button.classList.add('hidden');
        } else {
            spitch.classList.remove('w-96');
            spitch.classList.remove('h-24');
            spitch.classList.add('w-0');
            spitch.classList.add('h-0');
        }

        spitch.addEventListener('transitionend', () => {
            let spitchWidth = spitch.offsetWidth;
            if (spitchWidth === 0) {
                button.classList.remove('hidden');
            }
        });
    }

    return (
        <div className={'w-fit h-fit grid grid-cols-11 cursor-pointer'} onClick={openSpitch}>
            <div className={'grid col-start-1 col-end-12'}>
                <img src={vector1} alt="vector1" className={''}/>
            </div>
            <div className={'grid col-start-2 col-end-10 justify-center'}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={'w-fit'} >
                    <h2 className={ClassTitle + ' button-open'} style={StyleTitle}>
                        CLICK <br/> TO OPEN
                    </h2>
                </a>

                {/* eslint-disable-next-line react/style-prop-object */}
                <div className={'w-0 h-0 overflow-hidden spitch'} style={StyleSpitch}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, atque, commodi dicta doloremque eos facilis hic incidunt ipsa nesciunt nihil nobis porro quis, rerum sequi voluptate. Debitis minus nobis repellendus.
                </div>

            </div>
            <div className={'grid col-start-1 col-end-12 justify-end'}>
                <img src={vector2} alt="vector2" className={''}/>
            </div>
        </div>
    )
}