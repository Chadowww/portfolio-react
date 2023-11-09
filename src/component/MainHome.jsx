import earth from "../images/earth.svg";
import vector1 from "../images/vector/Vector1.svg";
import vector2 from "../images/vector/Vector2.svg";

export function MainHome() {
    // Title
    const ClassTitle = 'text-5xl font-bold text-center font-[DeathStar] text-shadow';
    const StyleTitle = {
        color: 'transparent',
        WebkitTextStroke: '1px #CEB7FF',
    }
    const StyleEarth = {
        width: '100%',
        height: 'auto',
        transform: 'rotate(197deg)',
    };
    const StyleBlockTop = {
        // // clipPath: 'polygon(30% 0%, 100% 0, 100% 30%, 30% 30%, 30% 60%, 30% 100%, 0 100%, 0 0)',
        // // backgroundColor: '#CEB7FF',
        // width: '100px',
        // height: '100px',
    };
    const StyleBlockBottom = {
        // // clipPath: 'polygon(70% 0, 100% 0, 100% 30%, 100% 100%, 70% 100%, 0 100%, 0 70%, 70% 70%)',
        // // backgroundColor: '#CEB7FF',
        // width: '100px',
        // height: '100px',
    };

    function openSpitch() {
        let spitch = document.querySelector('.spitch');
        let button = document.querySelector('.button-open');

        if (spitch.classList.contains('h-0')) {
            spitch.classList.remove('h-0');
            spitch.classList.remove('w-0');
            spitch.classList.add('h-auto');
            button.classList.add('hidden');
        } else {
            spitch.classList.remove('h-auto');
            spitch.classList.add('h-0');
            button.classList.remove('hidden');
        }
    }

    return (
        <div className="relative w-8/12 h-full flex flex-col justify-around items-center overflow-hidden">
            <div className="w-fit">
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <div className="w-full h-4 border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">Alexandre Sale</h2>
                </div>
                <div>
                    <h1 className={ClassTitle} style={StyleTitle}>
                        Bienvenue sur mon portfolio
                    </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-full h-4  border-glow"></div>
                    <h2 className="text-[#CEB7FF] font-[DeathStar] whitespace-nowrap px-2">AS-Turing</h2>
                </div>
            </div>
            <div className={'relative w-full min-h-[280px]'}>
                <div className={'absolute w-full h-fit'}>
                    <div className={'relative'}>
                        <img src={earth} alt="earth" style={StyleEarth}/>
                        <div className={'absolute top-[15%] right-[35%] w-3/12 grid grid-cols-11 h-[200px]' +
                            ' cursor-pointer'} onClick={openSpitch}>
                            <div style={StyleBlockTop} className={'grid col-start-1 col-end-12'}>
                                <img src={vector1} alt="vector1" className={''}/>
                            </div>
                            <div className={'grid col-start-2 col-end-10'}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className={''} >
                                    <h2 className={ClassTitle + ' button-open'} style={StyleTitle}>
                                        CLICK <br/> TO OPEN
                                    </h2>
                                </a>

                                <div className={'w-0 h-0 overflow-hidden spitch'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, atque, commodi dicta doloremque eos facilis hic incidunt ipsa nesciunt nihil nobis porro quis, rerum sequi voluptate. Debitis minus nobis repellendus.
                                </div>

                            </div>
                            <div style={StyleBlockBottom} className={'grid col-start-1 col-end-12 justify-end'}>
                                <img src={vector2} alt="vector2" className={''}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}