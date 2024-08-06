"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../public/SA.png";
import image2 from "../../public/SA2.png";

import styles from './imageslider1.module.scss';

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
    // Runs only on the client side
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isHovered]); // Dependencies: only re-run if isHovered changes

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className={styles.sliderContainer}>
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
          layout="responsive" // Ensures the image scales correctly
          width={800} // Set a default width
          height={600} // Set a default height
        />
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index} // Unique key for each element
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