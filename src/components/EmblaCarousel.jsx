import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img
            src="https://github.com/jyshowalter/Prieto-Photography/blob/main/src/assets/images/Slide1.jpg?raw=true"
            className="w-full"
          />
        </div>
        <div className="embla__slide">
          <img
            src="https://github.com/jyshowalter/Prieto-Photography/blob/main/src/assets/images/Slide2.jpg?raw=true"
            className="w-full"
          />
        </div>
        <div className="embla__slide">
          <img
            src="https://github.com/jyshowalter/Prieto-Photography/blob/main/src/assets/images/Slide3.jpg?raw=true"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
