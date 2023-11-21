import React, {useEffect, useState} from 'react';
import * as PropTypes from "prop-types";
import {motion} from "framer-motion";
import {Card} from "../atoms/Card";
export function SkillCard() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('http://localhost:3001/skills');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        fetchSkills();
    }, []); // Le tableau vide signifie que useEffect s'exécutera une seule fois après le montage initial


    function shuffleArray(array) {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    const shuffledSkillList = shuffleArray(skills);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
    return (
        <motion.div
            className={"w-full h-full flex justify-center"}
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-8/12">
                {shuffledSkillList.map((skill, index) => {
                    return (
                        <motion.div key={index} variants={item}>
                            <Card skill={skill}/>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}
SkillCard.prototype = {
    skillList: PropTypes.array.isRequired,
}