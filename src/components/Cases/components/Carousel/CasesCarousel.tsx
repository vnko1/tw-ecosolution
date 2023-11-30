import { FC } from "react";

import "react-multi-carousel/lib/styles.css";

import { CasesCarouselProps } from "./CasesCarousel.type";
import styles from "./CasesCarousel.module.scss";
import Case from "../Case/Case";
import Carousel, { CarouselInternalState } from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 8000, min: 1280 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CasesCarousel: FC<CasesCarouselProps> = ({
  values,
  setStep,
  carouselRef,
}) => {
  const onHandleSteps = (
    nextSlide: number,
    { currentSlide }: CarouselInternalState
  ) => {
    if (currentSlide > nextSlide)
      return setStep((step) => {
        if (step === 1) return 5;
        return (step -= 1);
      });

    return setStep((step) => {
      if (step >= values.length) return 1;
      return (step += 1);
    });
  };
  return (
    <Carousel
      ref={carouselRef}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={3000}
      transitionDuration={500}
      // autoPlay
      shouldResetAutoplay
      beforeChange={onHandleSteps}
      arrows={false}
      sliderClass={styles["carousel"]}
      itemClass={styles["carousel__item"]}
    >
      {values.map((el, i) => (
        <Case {...el} key={i} />
      ))}
    </Carousel>
  );
};

export default CasesCarousel;
