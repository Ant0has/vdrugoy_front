'use client'

import { FC } from "react";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "./data";
import ReviewCard from "./ReviewCard/ReviewCard";
import s from './Reviews.module.scss';
import ReviewTitle from "./ReviewTitle/ReviewTitle";

import avatar1 from '@/public/images/avatar-1.png';
// import avatar2 from '@/public/images/avatar-2.png';
// import avatar3 from '@/public/images/avatar-3.png';

import 'swiper/css';
import clsx from "clsx";
interface IProps {
  title?: unknown;
}

const Reviews: FC<IProps> = () => {
  const avatars = [avatar1]
  return (
    <>
      <div id="reviews" className="container container-100 ">
        <div className={clsx(s.title, 'title')}>Отзывы</div>


        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          className={s.swiper}
          // loop
          // modules={[Autoplay]}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map(review => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} avatar={avatars[0]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div >
    </>
  )
}

export default Reviews;