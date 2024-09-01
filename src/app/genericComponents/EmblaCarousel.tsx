import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
// eslint-disable-next-line import/no-extraneous-dependencies
import useEmblaCarousel from "embla-carousel-react";
import { ImageInformation } from "@data/interfaces";
import Image from "next/image";

type PropType = {
  slides: ImageInformation[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index.index}>
              <div className="embla__slide__number">
                <Image
                  src={index.url}
                  alt={index.alt}
                  layout="fill"
                  objectFit="contain"
                  className="embla__slide__image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
