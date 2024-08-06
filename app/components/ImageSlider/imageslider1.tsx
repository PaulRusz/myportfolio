
"use client"

import { useState, useEffect } from 'react';

import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../public/SA.png";
import image2 from "../../public/SA2.png";

import styles from './imageslider1.module.scss'

// image data
interface ImageData {
    src: StaticImageData;
}

// image array
const images: ImageData[] = [
    { src: image1 },
    { src: image2 },
];

export default function ImageSlider(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const handleMouseOver = (): void => {
        setIsHovered(true);
    }

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    }

    return (
        <div className="sliderContainer">
            <div
                className={`${styles.sliderImage} group hover:-translate-y-2`}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    className={styles.sliderImage}
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    priority={true}
                />
            </div>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 mx-1 ${
                            index === currentIndex
                                ? "bg-[#beff46] rounded-xl"
                                : "bg-gray-300 rounded-xl"
                        } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
}