import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { ImageInformation } from "@data/interfaces";

type PropType = {
  slides: ImageInformation[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides }) => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <section className="embla marquee" aria-label="Autoplaying image gallery">
      <div className="marquee__track">
        {duplicatedSlides.map((slide, index) => (
          <div className="marquee__slide" key={`${slide.index}-${index}`}>
            <img src={slide.url} alt={slide.alt} className="marquee__image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
