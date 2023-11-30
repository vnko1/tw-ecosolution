import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Case } from "../../Cases.type";
import Carousel from "react-multi-carousel";

export type CasesCarouselProps = {
  values: Case[];
  carouselRef: MutableRefObject<Carousel | null>;
  setStep: Dispatch<SetStateAction<number>>;
};
