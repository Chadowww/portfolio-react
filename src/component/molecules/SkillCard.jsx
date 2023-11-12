import React from 'react';
import {motion} from "framer-motion";
import {Card} from "../atoms/Card";
export function SkillCard() {

    const initialSkillList = [
        { name: 'PHP', value: 70 },
        { name: 'Symfony', value: 65 },
        { name: 'Mysql', value: 65 },
        { name: 'Doctrine', value: 70 },
        { name: 'React', value: 50 },
        { name: 'TailwindCSS', value: 80 },
        { name: 'Bootstrap', value: 80 },
        { name: 'PhpUnit', value: 25 },
        { name: 'Twig', value: 50 },
        { name: 'API Rest', value: 50 },
        { name: 'Java Script', value: 60 },
        { name: 'Webpack', value: 60 },
        { name: 'Symfony UX', value: 45 },
        { name: 'HTML', value: 85 },
        { name: 'CSS', value: 85 },
        { name: 'Vue.JS', value: 10 },
    ];
    function shuffleArray(array) {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    const shuffledSkillList = shuffleArray(initialSkillList);

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
                className="grid grid-cols-4 gap-4 w-8/12">
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