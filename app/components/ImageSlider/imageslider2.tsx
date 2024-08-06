
"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../public/SA.png";
import image2 from "../../public/SA2.png";
// import image3 from "@/public/image3.jpg";

import styles from "./imageslider2.module.css";

// image data
interface ImageData {
  src: StaticImageData;
}

// image array
const images: ImageData[] = [
  { src: image1 },
  { src: image2 },
  // { src: image3 },
  ];

export default function ImageSlider2(): JSX.Element {

  // Keeps track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // determines if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // function to show the previous slide
  const prevSlide = (): void => {
      setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
      )
  }

  // function to show the next slide
  const nextSlide = (): void => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % images.length)
  }

  // effect to handle auto slide transition
  useEffect(() => {
    // start auto slide transition if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // cleans the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="sliderContainer2">
      <div
        className={`${styles.sliderImage2} group hover:-translate-y-2`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className={styles.sliderImage2}
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
