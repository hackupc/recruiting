import React from "react";
import Image from "next/image";
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
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              sizes="(max-width: 444px) 72vw, 320px"
              quality={65}
              className="marquee__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
