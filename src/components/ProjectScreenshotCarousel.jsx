import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function ProjectScreenshotCarousel({
  screenshots,
  onSelectImage,
}) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * 0.85;

    carouselRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">

      {/* Carousel Navigation */}

      <div className="mb-4 flex items-center justify-between">

        <p className="text-sm font-medium text-slate-500">
          Showing {screenshots.length} project screenshots
        </p>

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous screenshots"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#080D4D] shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label="Next screenshots"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#080D4D] shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

      </div>

      {/* Screenshot Carousel */}

      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
        style={{
          scrollbarWidth: "thin",
        }}
      >

        {screenshots.map((screenshot) => (

          <article
            key={screenshot.image}
            className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:w-[65%] lg:w-[48%]"
          >

            {/* Screenshot Image */}

            <button
              type="button"
              onClick={() => onSelectImage(screenshot)}
              aria-label={`View ${screenshot.title} screenshot`}
              className="relative block w-full overflow-hidden bg-slate-100"
            >

              <img
                src={screenshot.image}
                alt={screenshot.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-[#080D4D]/0 transition-all duration-300 group-hover:bg-[#080D4D]/30">

                <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#080D4D] opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">

                  <ExternalLink className="h-4 w-4" />

                  View Full Image

                </span>

              </div>

            </button>

            {/* Screenshot Title */}

            <div className="p-4 sm:p-5">

              <h4 className="text-base font-bold text-[#080D4D]">
                {screenshot.title}
              </h4>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
}