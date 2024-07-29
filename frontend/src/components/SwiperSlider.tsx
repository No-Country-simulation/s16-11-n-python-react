import { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { SwiperModule, SwiperOptions } from 'swiper/types';

import './css/SwiperSlider.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface SwiperBreakpoints {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
}

interface SwiperSliderProps {
  swiperImages?: { urlImg: string }[] | string[];
  autoPlay?: boolean;
  autoPlayDuration?: number;
  loop?: boolean;
  paginationClickable?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  centeredSlides?: boolean;
  autoPlayProgress?: boolean;
  slidesPerView?: number;
  breakPoints?: SwiperBreakpoints;
  swiperModules: SwiperModule[];
}

export const SwiperSlider = (props: SwiperSliderProps) => {
  const {
    slidesPerView = 1,
    autoPlay = false,
    autoPlayDuration = 10000,
    loop = false,
    paginationClickable = false,
    navigation = false,
    spaceBetween = 30,
    centeredSlides = false,
    autoPlayProgress = false,
    swiperImages,
    swiperModules,
    breakPoints,
  } = props;
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoPlayTimeLeft = (_: SwiperClass, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        loop={loop}
        autoplay={autoPlay ? { delay: autoPlayDuration, disableOnInteraction: false } : !autoPlay}
        pagination={paginationClickable ? { clickable: paginationClickable } : !paginationClickable}
        navigation={navigation}
        modules={swiperModules}
        breakpoints={breakPoints ? breakPoints : undefined}
        {...(autoPlayProgress ? { onAutoPlayTimeLeft } : {})}
      >
        {swiperImages &&
          swiperImages.map((image, index) => (
            <SwiperSlide key={index}>
              {typeof image === 'string' ? (
                image
              ) : (
                <>
                  <img src={image.urlImg} loading="lazy" alt={`slide ${index + 1}`} />
                  <div className="swiper-lazy-preloader swiper-swiper-lazy-preloader-white"></div>
                </>
              )}
            </SwiperSlide>
          ))}
        {autoPlayProgress && (
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        )}
      </Swiper>
    </>
  );
};
