import React, { useState, useEffect } from "react";
import image1 from "../assets/111.jpg";
import image2 from "../assets/22.jpg";
import image3 from "../assets/33.jpg";
import image4 from "../assets/44.jpg";
import image6 from "../assets/66.jpg";

const images = [

    {
        src: image6,
        alt: "Graduation ceremony",
        description: "Participated in prestigious global Quran competition, invited by Muhammad Husni Mubarak President of Egypt."
    },
    {
        src: image2,
        alt: "Classroom session",
        description: "Identification badge from Egyptian Ministry of Awqaf (Religious Endowments for a Quran competitionl)."
    },
    
    {
        src: image3,
        alt: "Teacher with student",
        description: "Secured first Position at National Quran and Qirat competition."
    },
    
    {
        src: image4,
        alt: "Online learning",
        description: "Secured Second Position at National Quran and Qirat competition."
    },
    {
        src: image1,
        alt: "Student learning Quran",
        description: "Certificate of Tajweed-ul-Quran from Jamia Siddiqia BWP, Pakistan."
    }
];

const ImageScroll = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-16 bg-black/90 relative">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">Our Gallery</h2>
                <p className="text-gray-200 mb-12 text-center">Explore the certified qualifications of our dedicated teachers. These certificates highlight their commitment to excellence in education.</p>

                <div className="relative">
                    <div className="relative w-full h-fit sm:h-96 md:h-fit rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-500"
                            srcSet={`
                                ${images[currentIndex].src} 500w,
                                ${images[currentIndex].src} 800w,
                                ${images[currentIndex].src} 1000w
                            `}
                            sizes="(max-width: 640px) 100vw,
                                   (max-width: 1024px) 80vw,
                                   500px"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-semibold">{images[currentIndex].alt}</p>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-yellow-400 hover:bg-black/70 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-yellow-400 hover:bg-black/70 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    {/* Image Description */}
                    <div className="mt-4 text-center">
                        <p className="text-gray-200 text-lg leading-relaxed">
                            {images[currentIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageScroll;
