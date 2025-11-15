

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
      setTimeout(() => setShowFood(false), 2000); // show for 2 sec
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrentVideo((currentVideo + 1) % videos.length);

  return (
    <section className="relative w-full flex justify-center items-center mt-6">
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
                className="w-full h-[75vh] object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8">
          
          <p className="mt-4 text-xl max-w-2xl text-gray-100 leading-relaxed">
            Share delicious food with your community 🍲 <br />
            Reduce waste, feed people, and spread love!
          </p>
          <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg transition-all">
            Start Sharing
          </button>
        </div>

        {/* Animated Food overlay */}
        {showFood && (
          <img
            src="https://i.ibb.co/0sF7Tkq/food-icon.png" 
            alt="Food"
            className="absolute bottom-10 right-10 w-24 h-24 animate-fadeInOut"
          />
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Banner;



