import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../atoms/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import "../../style/embla.css";

const PARALLAX_FACTOR = 0.5;
const imgByIndex = (index) => `https://picsum.photos/id/${index + 1}/800/800`;

const EmblaCarousel = ({ slides }) => {
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

    return (
        <div className="embla mb-48  rounded-[0.5rem]">
            <div className="embla__viewport rounded-[0.5rem]" ref={viewportRef}>
                <div className="embla__container rounded-[0.5rem]">
                    {slides.map((index) => (
                        <div className="embla__slide py-1" key={index}>
                            <div className="embla__slide__inner rounded-[0.5rem] border-glow">
                                <div
                                    className="embla__slide__parallax rounded-[0.5rem]"
                                    style={{ transform: `translateX(${parallaxValues[index]}%)` }}
                                >
                                    <img
                                        className="embla__slide__img rounded-[0.5rem]"
                                        src={imgByIndex(index)}
                                        alt="A cool cat."
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    );
};

export default EmblaCarousel;
