'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SlidesQueryData } from "@/models/home.models";
import { GET_SLIDES_DATA } from "@/db/queries/home";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getMainSlider } from "@/lib/services/main-slider.service";
import { ChevronLeft, ChevronRight  } from 'lucide-react';
import clsx from 'clsx';
import styles from '@/components/styles/Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const {
  MainBanner, 
  MainBannerSubtitle,
  MainBannerTitle,
  NavWrapper,
  Btn,
  BtnPrev,
  BtnNext,
  BtnIcon,
  Pagination:PaginationCss,
  PaginationBullet,
  ActiveBullet
} = styles;

const Slider = () => {

  const data = useSuspenseQuery<SlidesQueryData>(GET_SLIDES_DATA);
  const sliderData = getMainSlider(data);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop
      pagination={{ 
        el: '#pag',
        clickable: true,
        bulletActiveClass: `${ActiveBullet}`,
        bulletClass: `${PaginationBullet}`
      }}
      navigation={{
        prevEl: "#prev",
        nextEl: "#next"
      }}
    >
      {sliderData.map((item) => {
        return (

          <SwiperSlide key={item.id}>
            <div className={MainBanner} style={{backgroundImage: `url("${item.slide.photo.sourceUrl}")`}}>
              <span className={MainBannerSubtitle} dangerouslySetInnerHTML={{__html: item.slide.subtitle}} />
              <h2 className={MainBannerTitle} dangerouslySetInnerHTML={{__html:item.slide.title}}/>
            </div>
          </SwiperSlide>
        );
      })}

      <div className={NavWrapper}>
        <button id='prev' className={clsx(Btn, BtnPrev)}>
          <i className={BtnIcon}>
            <ChevronLeft size={30} strokeWidth={2.5}/>
          </i>
        </button>
        <button id='next' className={clsx(Btn, BtnNext)}>
          <i className={BtnIcon}>
            <ChevronRight size={30} strokeWidth={2.5}/>
          </i>
        </button>
      </div>

      <div id='pag' className={PaginationCss}></div>
    </Swiper>
  );
}

export default Slider;