import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import LeftArrow from "../../public/icons/LeftArrow";
import RightArrow from "../../public/icons/RightArrow";

interface SliderProps {
    children: ReactNode[];
    interval?: number;
}

const Slider: FC<SliderProps> = ({ children, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(children.length / itemsPerSlide);
    const [animate, setAnimate] = useState("animate__lightSpeedInRight");

    const handleNext = useCallback(() => {
        setAnimate("animate__lightSpeedInRight");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, [totalSlides]);

    const handlePrev = () => {
        setAnimate("animate__lightSpeedInLeft");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(handleNext, interval);
        return () => clearInterval(slideInterval);
    }, [handleNext, interval]);

    return (
        <div className="relative flex flex-1 overflow-hidden my-6 w-[700px]">
            <div className="w-full flex items-center justify-center">
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`absolute transition-opacity duration-700 ease-in-out animate__animated ${slideIndex === currentIndex ? animate : "opacity-0"
                            } flex gap-4 justify-center`}
                        style={{ width: "700px" }}
                    >
                        {children.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)}
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                onClick={handlePrev}
            >
                <LeftArrow />
            </button>
            <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                onClick={handleNext}
            >
                <RightArrow />
            </button>
        </div>
    );
};

export default Slider;