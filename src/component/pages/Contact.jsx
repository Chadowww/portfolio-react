import React, {useEffect, useState} from 'react';
import * as PropTypes from "prop-types";
import background from '../../images/bg-contact.svg';
import {ParticlesContact} from "../templates/ParticlesContact";
import {motion} from "framer-motion";

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
export function Contact() {
    const isSmallScreen = useMediaQuery('(max-width: 400px)');

    let mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
    };
    let mainClass = "relative h-screen w-screen";
    let ClassTitle = 'text-6xl font-bold text-center font-[DeathStar] text-shadow my-4';
    let StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }
    let backStyle = {
        fontFamily: "Bebas Neue",
        fontSize: isSmallScreen ? "20px" : '41px',
        cursor: "pointer",
    };

    let inputClass = "";
    let inputStyle = {
        width: 'inherit',
        resize: 'none',
        backgroundColor: '#CEB7FF',
        opacity: '0.5',
        color: '#000000',
        fontWeight: 'bold',
    };
    let labelStyle = {
        fontFamily: "Bebas Neue",
        fontSize: "38px",
        width: '20%',
    };
    let labelClass = "hidden md:inline text-right md:mr-4";
    let socialIcon = "my-4 hover:scale-110 transform transition-all duration-1000 ease-in-out";

    const inputChangeHandler = (setState, event) => {
        setState(prevState => event.target.value);
    }


    const pageVariants = {
        initial: { opacity: 0},
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const pageTransition = {
        duration: 3,
    };

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    function onFocusStyle(e) {
        e.target.style.opacity = '1'
    }


    function onBlurStyle(e) {
          e.target.style.opacity = '0.5'
    }

    async function sendMail(){
        const response = await fetch('http://172.20.10.2:3001/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, subject, content }),
        });

        if (response.ok) {
            window.location.href = '/';
        } else {
            console.error("Error sending email");
        }
    }

    function handleClick(e) {
        e.preventDefault();
        sendMail()
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className={mainClass} style={mainStyle}>
                <ParticlesContact/>
                <div className={"relative h-screen w-full flex flex-col justify-between items-center "}>
                    <div className="hidden md:block w-full mt-6 ml-16">
                        <a href={"/"} style={backStyle}>&lt; Go back</a>
                    </div>
                    <div>
                        <div className="w-fit animate-pulse scale-50 md:scale-75 lg:transform-none">
                            <div className="w-full flex flex-row-reverse justify-between items-center">
                                <div className="w-full h-4 border-glow"></div>
                            </div>
                            <div>
                                <h1 className={ClassTitle} style={StyleTitle}>
                                    Contact me
                                </h1>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="w-full h-4  border-glow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12">
                        <form method={"post"} className="w-full flex flex-col justify-around p-4">
                            <div className="w-full flex my-4">
                                <label htmlFor="email" style={labelStyle} className={labelClass}>Email: </label>
                                <input type="text"
                                       id={"email"}
                                       name={"email"}
                                       placeholder={"Email address"}
                                       onChange={(e)=>inputChangeHandler(setEmail, e)}
                                       onFocus={onFocusStyle}
                                       onBlur={onBlurStyle}
                                       className={inputClass}
                                       style={inputStyle}/>
                            </div>
                            <div className="w-full flex my-4">
                                <label htmlFor="subject" style={labelStyle} className={labelClass}>Subject: </label>
                                <input
                                    type="text"
                                    id={"subject"}
                                    name={"subject"}
                                    placeholder={"Subject"}
                                    onChange={(e)=>inputChangeHandler(setSubject, e)}
                                    onFocus={onFocusStyle}
                                    onBlur={onBlurStyle}
                                    className={inputClass}
                                    style={inputStyle}/>
                            </div>
                            <div className="w-full flex my-4">
                                <label htmlFor="content" style={labelStyle} className={labelClass}>Content: </label>
                                <textarea
                                    id={"content"}
                                    name={"content"}
                                    cols="30" rows={isSmallScreen ? "5" : "10"}
                                    placeholder={"Content"}
                                    onChange={(e)=>inputChangeHandler(setContent, e)}
                                    onFocus={onFocusStyle}
                                    onBlur={onBlurStyle}
                                    className={inputClass}
                                    style={inputStyle}></textarea>
                            </div>
                            <button type="submit" className={"w-min m-auto text-2xl p-3 rounded hover:bg-[#CEB7FF]"} onClick={handleClick}> submit</button>
                        </form>
                    </div>
                    <div className="w-full md:w-5/12 scale-50 md:transform-none ">
                        <div className={"w-full flex justify-around items-center"}>
                            <a href="https://www.linkedin.com/in/alexandresale/" className={socialIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0,0,256,256">
                                    <g fill="#ceb7ff"  stroke="none"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                                </svg>
                            </a>
                            <a href="https://github.com/Chadowww" className={socialIcon}>
                                <svg width="80" height="80" fill="#CEB7FF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#CEB7FF"/>
                                </svg>
                            </a>
                            <a href="https://www.malt.fr/profile/alexandresale" className={socialIcon}>
                                <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg" aria-label="Malt" role="img" viewBox="0 0 512 512">
                                    <path fill="#ceb7ff"
                                          d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </motion.div>
    )
}
Contact.propTypes = {
    email: PropTypes.string,
    subject: PropTypes.string,
    content: PropTypes.string,
    setEmail: PropTypes.func,
    setSubject: PropTypes.func,
    setContent: PropTypes.func,
    onSubmitHandler: PropTypes.func,
    inputChangeHandler: PropTypes.func,
    onFocusStyle: PropTypes.func,
    onBlurStyle: PropTypes.func,
};