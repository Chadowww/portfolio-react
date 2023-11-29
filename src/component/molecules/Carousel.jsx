import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../atoms/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import "../../style/embla.css";

const PARALLAX_FACTOR = 0.5;

const EmblaCarousel = ({ slides, id }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop: false,
        dragFree: true
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [parallaxValues, setParallaxValues] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    const onScroll = useCallback(() => {
        if (!embla) return;

        const engine = embla.internalEngine();
        const scrollProgress = embla.scrollProgress();

        const styles = embla.scrollSnapList().map((scrollSnap, index) => {
            if (!embla.slidesInView().includes(index)) return 0;
            let diffToTarget = scrollSnap - scrollProgress;

            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.getTarget();
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target);
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                    }
                });
            }
            return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
        });
        setParallaxValues(styles);
    }, [embla, setParallaxValues]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        onScroll();
        embla.on("select", onSelect);
        embla.on("scroll", onScroll);
        embla.on("resize", onScroll);
    }, [embla, onSelect, onScroll]);

    const [projectImage, setProjectImage] = useState([]);

    useEffect(() => {
        const fetchProjectImage = async () => {
            try{
                const response = await fetch('http://172.20.10.2:3001/images/project/' + id);
                if (!response.ok) {
                    throw new Error('HTTP Error! status: ' + response.status);
                }
                const data = await response.json();
                setProjectImage(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchProjectImage();
    }, [id]);

    return (
        <div className="embla mb-48  rounded-[0.5rem]">
            <div className="embla__viewport rounded-[0.5rem]" ref={viewportRef}>
                <div className="embla__container rounded-[0.5rem]">
                    {projectImage && projectImage.map((item, index) => {
                        const isVideo = item.image.split('.').pop() === 'mov';

                        return(
                            <div className="embla__slide py-1" key={index}>
                                <div className="embla__slide__inner rounded-[0.5rem] border-glow">
                                    <div
                                        className="embla__slide__parallax rounded-[0.5rem]"
                                        style={{ transform: `translateX(${parallaxValues[index]}%)` }}
                                    >
                                        {isVideo ? (
                                            <video
                                                src={item.image}
                                                className='embla__slide__img rounded-[0.5rem]'
                                                controls
                                            />
                                        ) : (
                                            <img
                                                className="embla__slide__img rounded-[0.5rem]"
                                                src={item.image}
                                                alt=""
                                            />
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    );
};

export default EmblaCarousel;
