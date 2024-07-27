import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useRef } from 'react';

import './css/SwiperSlider.css';

interface SwiperSliderProps {
  swiperImages: { urlImg: string }[];
  autoPlayDelay?: number;
  loop?: boolean;
  paginationClickable?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  centeredSlides?: boolean;
  autoPlayProgress?: boolean;
}

export const SwiperSlider = (props: SwiperSliderProps) => {
  const {
    autoPlayDelay,
    loop,
    paginationClickable,
    navigation,
    spaceBetween,
    centeredSlides,
    autoPlayProgress,
    swiperImages,
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
        spaceBetween={spaceBetween ?? 30}
        centeredSlides={centeredSlides ?? true}
        loop={loop ?? true}
        autoplay={{
          delay: autoPlayDelay ?? 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: paginationClickable ?? true,
        }}
        navigation={navigation ?? true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoPlayTimeLeft}
      >
        {swiperImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.urlImg} loading="lazy" alt={`slide ${index + 1}`} />
            <div className="swiper-lazy-preloader swiper-swiper-lazy-preloader-white"></div>
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
