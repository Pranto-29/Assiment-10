

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

// Video URLs
const videos = [
  "https://www.shutterstock.com/shutterstock/videos/3541834361/preview/stock-footage-person-eat-desserts-moving-banner-with-man-sitting-at-festive-table-and-eating-sweet-cake-buns.webm"
];

const Banner = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showFood, setShowFood] = useState(false);

  // Auto slide video every 6 seconds
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(videoInterval);
  }, []);

  // Show Food icon every 4 seconds for 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFood(true);
      setTimeout(() => setShowFood(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrentVideo((currentVideo + 1) % videos.length);

  return (
    <section className="relative w-full flex justify-center items-center mt-6 px-2 sm:px-4">
      <div className="max-w-7xl w-full mx-auto relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">

        {/* Video Carousel */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentVideo * 100}%)` }}
        >
          {videos.map((src, i) => (
            <div key={i} className="w-full shrink-0 relative">
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] object-cover brightness-90 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-3xl" />
            </div>
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4">
            Share Delicious Food 🍲
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xl md:max-w-2xl text-gray-100 leading-relaxed">
            Reduce waste, feed people, and spread love!
          </p>
          <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg transition-all text-sm sm:text-base">
            Start Sharing
          </button>
        </div>

        {/* Animated Food Overlay */}
        {showFood && (
          <img
            src="https://i.ibb.co/0sF7Tkq/food-icon.png"
            alt="Food"
            className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-10 w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 animate-fadeInOut"
          />
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition"
        >
          <ChevronLeft className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition"
        >
          <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
        </button>
      </div>
    </section>
  );
};

export default Banner;
