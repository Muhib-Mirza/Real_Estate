import { Swiper, SwiperSlide } from "swiper/react";
import style from "@/styles/homepage/Home.module.css";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, EffectCreative, Navigation } from "swiper";
import React from 'react';


export default function App() {
  const animateVariants = {
    hidden:{
      opacity:0,
      y:"10rem"
    },
    animate:{
      opacity:1,
      y:"0rem",
      transition:{
        type:"spring",
            stiffness:140,
            damping:11,
            duration:0.3,
            repeat:0
      }
    }
  }
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        spaceBetween={30}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div className={style.sliderContainer}
          variants = { animateVariants }
          initial={"hidden"}
          animate={"animate"}
          >
            <div className={style.carouselHead}>
              Let Your Home Be Unique & Stylist
            </div>
            <motion.button
            whileTap={{
              scale:0.8
            }}
             className={style.slideBtn}>Learn More</motion.button>
          </motion.div>
          <img src="/slide1.jpg" alt="" className={style.imag} />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div className={style.sliderContainer} variants = { animateVariants }
          initial={"hidden"}
          animate={"animate"}>
            <div className={style.carouselHead}>
              Modern House Make better life
            </div>
            <motion.button
            whileTap={{
              scale:0.8
            }}
             className={style.slideBtn}>Learn More</motion.button>
          </motion.div>
          <img src="/slide2.jpg" alt="" className={style.imag} />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div className={style.sliderContainer} variants = { animateVariants }
          initial={"hidden"}
          animate={"animate"}>
            <div className={style.carouselHead}>
              Your property is our priority
            </div>
            <motion.button
            whileTap={{
              scale:0.8
            }}
             className={style.slideBtn}>Learn More</motion.button>
          </motion.div>
          <img src="/slide3.jpg" alt="" className={style.imag} />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div className={style.sliderContainer} variants = { animateVariants }
          initial={"hidden"}
          animate={"animate"}>
            <div className={style.carouselHead}>
              Your house is your peace place
            </div>
            <motion.button
            whileTap={{
              scale:0.8
            }}
             className={style.slideBtn}>Learn More</motion.button>
          </motion.div>
          <img src="/slide4.jpg" alt="" className={style.imag} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
