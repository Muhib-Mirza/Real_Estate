import Carousel from './Component/Carousel'
import Searchbar from './Component/SearchBar';
import style from "../styles/Section.module.css";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Fotter from './Component/Fotter';
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCreative } from "swiper";
import cstyle from "../styles/Card.module.css"

export default function Home() {
  
  const [scimage,setScImage] = useState({
    house:false,
    indust:false,
    commerc:false,
    land:false,
  });
  
  return (
    <>
      <Carousel />
      <Searchbar />
      <div className={style.head }>
      <motion.h1 initial={{
        opacity:0,
        translateY:"5rem"
      }}
      whileInView={{
        translateY:"0rem",
        opacity:1
      }}
      transition={{
        type:"spring",
        duration:0.2,
        stiffness:100,
        damping:11
      }}
      className={style.pcHead}
       >
        Our Categories & Places
      </motion.h1>
      <motion.h1 className={ style.mobHead } initial={{
        opacity:0,
        translateY:"5rem"
      }}
      whileInView={{
        translateY:"0rem",
        opacity:1
      }}
      transition={{
        type:"spring",
        duration:0.2,
        stiffness:150
      }}>
        Our Categories
      </motion.h1>
      </div>
      <motion.div className={ style.cContainer }
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration:0.1,
      }}
      >
        <motion.a href='/home' className={ style.card } 
        initial={{
          translateY:"7rem",
          opacity:0,
          backgroundColor:"#F3F5F1"
        }}
        whileInView={{
          translateY:"0rem",
          opacity:1
        }}
        transition={{
          type:"spring",
          stiffness:160,
          duration:0.1,
          damping:14.5,
        }}
        onMouseEnter={
          ()=>{
            setScImage({
              house:true
            })
          }
        }
        onMouseLeave={
          ()=>{
            setScImage({
              house:false
            })
          }
        }
        whileHover={{
          backgroundColor:"rgba(0,0,0,0.8)"
        }}
        >
          <motion.img src="/House(1).png" alt="" className={ style.cImage } animate={
            scimage.house ? {
              scale:1.2,
            }
            :{
              scale:1,
            }
          } 
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5
          }}
          />
          <motion.div className={ style.cText }
          animate={
            scimage.house ? {
              marginTop:"0.8rem",
              fontSize:"1.3rem",
              color:"white"
            }:{
              fontSize:"1.1rem",
              marginTop:"0.2rem",
              color:"black"
            }
          }
          >
            Resedential
          </motion.div>
        </motion.a>
        <motion.a href='/land' className={`${style.card} ${style.cmgn} `}
        initial={{
          translateY:"7rem",
          opacity:0,
          backgroundColor:"#F3F5F1"
        }}
        whileInView={{
          translateY:"0rem",
          opacity:1
        }}
        transition={{
          type:"spring",
          stiffness:160,
          duration:0.1,
          damping:14.5,
          delay:0.05,
        }}
        onMouseEnter={
          ()=>{
            setScImage({
              land:true
            })
          }
        }
        onMouseLeave={
          ()=>{
            setScImage({
              land:false
            })
          }
        }
        whileHover={{
          backgroundColor:"rgba(0,0,0,0.7)"
        }}
        >
          <motion.img src="/architect.png" alt="" className={ style.cImage } 
          animate={
            scimage.land ? {
              scale:1.2,
            }
            :{
              scale:1,
            }
          } 
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5
          }}
          />
          <motion.div className={ style.cText }
          animate={
            scimage.land ? {
              marginTop:"0.8rem",
              fontSize:"1.3rem",
              color:"white"
            }:{
              fontSize:"1.1rem",
              marginTop:"0.2rem",
              color:"black"
            }
          }
          >
            Land
          </motion.div>
        </motion.a>
        <motion.a href='/commercial' className={`${style.card} ${style.cmgn} ${ style.thirdCmgn }`}
        initial={{
          translateY:"7rem",
          opacity:0,
          backgroundColor:"#F3F5F1"
        }}
        whileInView={{
          translateY:"0rem",
          opacity:1
        }}
        transition={{
          type:"spring",
          stiffness:160,
          duration:0.1,
          damping:14.5,
          delay:0.07,
        }}
        onMouseEnter={
          ()=>{
            setScImage({
              commerc:true
            })
          }
        }
        onMouseLeave={
          ()=>{
            setScImage({
              commerc:false
            })
          }
        }
        whileHover={{
          backgroundColor:"rgba(0,0,0,0.7)"
        }}
        >
          <motion.img src="/building.png" alt="" className={ style.cImage } 
          animate={
            scimage.commerc ? {
              scale:1.2,
            }
            :{
              scale:1,
            }
          } 
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5,
            delay:0.1
          }}
          />
          <motion.div className={ style.cText }
          animate={
            scimage.commerc ? {
              marginTop:"0.8rem",
              fontSize:"1.3rem",
              color:"white"
            }:{
              fontSize:"1.1rem",
              marginTop:"0.2rem",
              color:"black"
            }
          }
          >
            Commercial
          </motion.div>
        </motion.a>
        <motion.a href='/factory' className={`${style.card} ${style.cmgn} ${ style.fourthCmgn }`}
        initial={{
          translateY:"7rem",
          opacity:0,
          backgroundColor:"#F3F5F1"
        }}
        whileInView={{
          translateY:"0rem",
          opacity:1
        }}
        transition={{
          type:"spring",
          stiffness:160,
          duration:0.1,
          damping:14.5,
        }}
        onMouseEnter={
          ()=>{
            setScImage({
              indust:true
            })
          }
        }
        onMouseLeave={
          ()=>{
            setScImage({
              indust:false
            })
          }
        }
        whileHover={{
          backgroundColor:"rgba(0,0,0,0.7)"
        }}
        >
          <motion.img src="/factory.png" alt="" className={ style.cImage }
          animate={
            scimage.indust ? {
              scale:1.2,
            }
            :{
              scale:1,
            }
          } 
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5
          }}
           />
           <motion.div className={ style.cText }
          animate={
            scimage.indust ? {
              marginTop:"0.8rem",
              fontSize:"1.3rem",
              color:"white"
            }:{
              fontSize:"1.1rem",
              marginTop:"0.2rem",
              color:"black"
            }
          }
          >
            Industrial
          </motion.div>
        </motion.a>
      </motion.div>
      {/* Cards Section */}
      <div className={style.ptHead }>
      <motion.h1 initial={{
        opacity:0,
        translateY:"5rem"
      }}
      whileInView={{
        translateY:"0rem",
        opacity:1
      }}
      transition={{
        type:"spring",
        duration:0.2,
        stiffness:100,
        damping:11
      }}
       >
        Our Properties
      </motion.h1>
        </div>
        {/* Card Section */}
        <motion.div 
        initial={{
          translateY:"5rem",
          opacity:0
        }}
        whileInView={{
          opacity:1,
          translateY:0
        }}
        transition={{
          type:"spring",
          stiffness:150,
          duration:0.2,
          damping:11
        }}
        >
        <Swiper
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          601: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1100:{
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[ Autoplay, Pagination, ]}
        className={`mySwiper ${ cstyle.container }`}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        rewind={true}
      >
        
        <SwiperSlide className={ cstyle.item }>
        <motion.div
          href="http://"
          className={cstyle.link}
          whileHover={{
            boxShadow: "4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          <div className={cstyle.card}>
            <img
              src="/card2.webp"
              alt="No image"
              className={` ${cstyle.cImage} cimg`}
              />
            <div className={cstyle.dealer}>
              <img
                src="/testImg.png"
                alt="No Image"
                className={cstyle.circle}
              />
              <span className={cstyle.name}>Muhammad Muhib Mirza</span>
            </div>
            <div className={ cstyle.location }>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={ cstyle.locIcon }
              >
                <path
                  d="M6.87501 0C5.0523 0.00215029 3.30487 0.727169 2.01602 2.01602C0.727176 3.30486 0.00215761 5.0523 7.3143e-06 6.875C-0.00217574 8.36452 0.48437 9.81361 1.38501 11C1.38501 11 1.57251 11.2469 1.60313 11.2825L6.87501 17.5L12.1494 11.2794C12.1769 11.2463 12.365 11 12.365 11L12.3656 10.9981C13.2658 9.81226 13.7521 8.36383 13.75 6.875C13.7479 5.0523 13.0228 3.30486 11.734 2.01602C10.4451 0.727169 8.69771 0.00215029 6.87501 0ZM6.87501 9.375C6.38056 9.375 5.89721 9.22838 5.48608 8.95367C5.07496 8.67897 4.75453 8.28852 4.56531 7.83171C4.37609 7.37489 4.32658 6.87223 4.42304 6.38727C4.51951 5.90232 4.75761 5.45686 5.10724 5.10723C5.45687 4.7576 5.90233 4.5195 6.38728 4.42304C6.87224 4.32657 7.3749 4.37608 7.83172 4.5653C8.28853 4.75452 8.67898 5.07495 8.95368 5.48607C9.22839 5.8972 9.37501 6.38055 9.37501 6.875C9.37418 7.53779 9.11052 8.17319 8.64186 8.64185C8.1732 9.11052 7.5378 9.37417 6.87501 9.375Z"
                  fill="#454545"
                />
              </svg>
              <span className={ cstyle.locName }>
                Lahore
              </span>
              <span className={ cstyle.sale }>
                Sale
              </span>
            </div>
            <div className={ cstyle.info }>
                <div className={ cstyle.iconContainer }>
                <img src="/bed.png" alt="Rooms" className={ cstyle.rpic } />
                <span className={ cstyle.rno }>2</span>
                </div>
                <div className={` ${ cstyle.iconContainer2 } `}>
                <img src="/bathtub.png" alt="Rooms" className={ cstyle.bpic } />
                <span className={ cstyle.rno }>1</span>
                </div>
                <div className={ cstyle.pkPrice } >
                  200,000
                  <span className={ cstyle.unit } >Rs</span>
                </div>
            </div>
          </div>
          <div className={ cstyle.priceContainer }>
            <motion.button whileTap={{
              scale:0.8
            }} className={ cstyle.price } >Buy Now
            </motion.button>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide className={ cstyle.item }>
        <motion.div
          href="http://"
          className={cstyle.link}
          whileHover={{
            boxShadow: "4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          <div className={cstyle.card}>
            <img
              src="/card2.webp"
              alt="No image"
              className={` ${cstyle.cImage} cimg`}
              />
            <div className={cstyle.dealer}>
              <img
                src="/testImg.png"
                alt="No Image"
                className={cstyle.circle}
              />
              <span className={cstyle.name}>Muhammad Muhib Mirza</span>
            </div>
            <div className={ cstyle.location }>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={ cstyle.locIcon }
              >
                <path
                  d="M6.87501 0C5.0523 0.00215029 3.30487 0.727169 2.01602 2.01602C0.727176 3.30486 0.00215761 5.0523 7.3143e-06 6.875C-0.00217574 8.36452 0.48437 9.81361 1.38501 11C1.38501 11 1.57251 11.2469 1.60313 11.2825L6.87501 17.5L12.1494 11.2794C12.1769 11.2463 12.365 11 12.365 11L12.3656 10.9981C13.2658 9.81226 13.7521 8.36383 13.75 6.875C13.7479 5.0523 13.0228 3.30486 11.734 2.01602C10.4451 0.727169 8.69771 0.00215029 6.87501 0ZM6.87501 9.375C6.38056 9.375 5.89721 9.22838 5.48608 8.95367C5.07496 8.67897 4.75453 8.28852 4.56531 7.83171C4.37609 7.37489 4.32658 6.87223 4.42304 6.38727C4.51951 5.90232 4.75761 5.45686 5.10724 5.10723C5.45687 4.7576 5.90233 4.5195 6.38728 4.42304C6.87224 4.32657 7.3749 4.37608 7.83172 4.5653C8.28853 4.75452 8.67898 5.07495 8.95368 5.48607C9.22839 5.8972 9.37501 6.38055 9.37501 6.875C9.37418 7.53779 9.11052 8.17319 8.64186 8.64185C8.1732 9.11052 7.5378 9.37417 6.87501 9.375Z"
                  fill="#454545"
                />
              </svg>
              <span className={ cstyle.locName }>
                Lahore
              </span>
              <span className={ cstyle.sale }>
                Sale
              </span>
            </div>
            <div className={ cstyle.info }>
                <div className={ cstyle.iconContainer }>
                <img src="/bed.png" alt="Rooms" className={ cstyle.rpic } />
                <span className={ cstyle.rno }>2</span>
                </div>
                <div className={` ${ cstyle.iconContainer2 } `}>
                <img src="/bathtub.png" alt="Rooms" className={ cstyle.bpic } />
                <span className={ cstyle.rno }>1</span>
                </div>
                <div className={ cstyle.pkPrice } >
                  200,000
                  <span className={ cstyle.unit } >Rs</span>
                </div>
            </div>
          </div>
          <div className={ cstyle.priceContainer }>
            <motion.button whileTap={{
              scale:0.8
            }} className={ cstyle.price } >Buy Now
            </motion.button>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide className={ cstyle.item }>
        <motion.div
          href="http://"
          className={cstyle.link}
          whileHover={{
            boxShadow: "4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          <div className={cstyle.card}>
            <img
              src="/card2.webp"
              alt="No image"
              className={` ${cstyle.cImage} cimg`}
              />
            <div className={cstyle.dealer}>
              <img
                src="/testImg.png"
                alt="No Image"
                className={cstyle.circle}
              />
              <span className={cstyle.name}>Muhammad Muhib Mirza</span>
            </div>
            <div className={ cstyle.location }>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={ cstyle.locIcon }
              >
                <path
                  d="M6.87501 0C5.0523 0.00215029 3.30487 0.727169 2.01602 2.01602C0.727176 3.30486 0.00215761 5.0523 7.3143e-06 6.875C-0.00217574 8.36452 0.48437 9.81361 1.38501 11C1.38501 11 1.57251 11.2469 1.60313 11.2825L6.87501 17.5L12.1494 11.2794C12.1769 11.2463 12.365 11 12.365 11L12.3656 10.9981C13.2658 9.81226 13.7521 8.36383 13.75 6.875C13.7479 5.0523 13.0228 3.30486 11.734 2.01602C10.4451 0.727169 8.69771 0.00215029 6.87501 0ZM6.87501 9.375C6.38056 9.375 5.89721 9.22838 5.48608 8.95367C5.07496 8.67897 4.75453 8.28852 4.56531 7.83171C4.37609 7.37489 4.32658 6.87223 4.42304 6.38727C4.51951 5.90232 4.75761 5.45686 5.10724 5.10723C5.45687 4.7576 5.90233 4.5195 6.38728 4.42304C6.87224 4.32657 7.3749 4.37608 7.83172 4.5653C8.28853 4.75452 8.67898 5.07495 8.95368 5.48607C9.22839 5.8972 9.37501 6.38055 9.37501 6.875C9.37418 7.53779 9.11052 8.17319 8.64186 8.64185C8.1732 9.11052 7.5378 9.37417 6.87501 9.375Z"
                  fill="#454545"
                />
              </svg>
              <span className={ cstyle.locName }>
                Lahore
              </span>
              <span className={ cstyle.sale }>
                Sale
              </span>
            </div>
            <div className={ cstyle.info }>
                <div className={ cstyle.iconContainer }>
                <img src="/bed.png" alt="Rooms" className={ cstyle.rpic } />
                <span className={ cstyle.rno }>2</span>
                </div>
                <div className={` ${ cstyle.iconContainer2 } `}>
                <img src="/bathtub.png" alt="Rooms" className={ cstyle.bpic } />
                <span className={ cstyle.rno }>1</span>
                </div>
                <div className={ cstyle.pkPrice } >
                  200,000
                  <span className={ cstyle.unit } >Rs</span>
                </div>
            </div>
          </div>
          <div className={ cstyle.priceContainer }>
            <motion.button whileTap={{
              scale:0.8
            }} className={ cstyle.price } >Buy Now
            </motion.button>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide className={ cstyle.item }>
        <motion.div
          href="http://"
          className={cstyle.link}
          whileHover={{
            boxShadow: "4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          <div className={cstyle.card}>
            <img
              src="/card2.webp"
              alt="No image"
              className={` ${cstyle.cImage} cimg`}
              />
            <div className={cstyle.dealer}>
              <img
                src="/testImg.png"
                alt="No Image"
                className={cstyle.circle}
              />
              <span className={cstyle.name}>Muhammad Muhib Mirza</span>
            </div>
            <div className={ cstyle.location }>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={ cstyle.locIcon }
              >
                <path
                  d="M6.87501 0C5.0523 0.00215029 3.30487 0.727169 2.01602 2.01602C0.727176 3.30486 0.00215761 5.0523 7.3143e-06 6.875C-0.00217574 8.36452 0.48437 9.81361 1.38501 11C1.38501 11 1.57251 11.2469 1.60313 11.2825L6.87501 17.5L12.1494 11.2794C12.1769 11.2463 12.365 11 12.365 11L12.3656 10.9981C13.2658 9.81226 13.7521 8.36383 13.75 6.875C13.7479 5.0523 13.0228 3.30486 11.734 2.01602C10.4451 0.727169 8.69771 0.00215029 6.87501 0ZM6.87501 9.375C6.38056 9.375 5.89721 9.22838 5.48608 8.95367C5.07496 8.67897 4.75453 8.28852 4.56531 7.83171C4.37609 7.37489 4.32658 6.87223 4.42304 6.38727C4.51951 5.90232 4.75761 5.45686 5.10724 5.10723C5.45687 4.7576 5.90233 4.5195 6.38728 4.42304C6.87224 4.32657 7.3749 4.37608 7.83172 4.5653C8.28853 4.75452 8.67898 5.07495 8.95368 5.48607C9.22839 5.8972 9.37501 6.38055 9.37501 6.875C9.37418 7.53779 9.11052 8.17319 8.64186 8.64185C8.1732 9.11052 7.5378 9.37417 6.87501 9.375Z"
                  fill="#454545"
                />
              </svg>
              <span className={ cstyle.locName }>
                Lahore
              </span>
              <span className={ cstyle.sale }>
                Sale
              </span>
            </div>
            <div className={ cstyle.info }>
                <div className={ cstyle.iconContainer }>
                <img src="/bed.png" alt="Rooms" className={ cstyle.rpic } />
                <span className={ cstyle.rno }>2</span>
                </div>
                <div className={` ${ cstyle.iconContainer2 } `}>
                <img src="/bathtub.png" alt="Rooms" className={ cstyle.bpic } />
                <span className={ cstyle.rno }>1</span>
                </div>
                <div className={ cstyle.pkPrice } >
                  200,000
                  <span className={ cstyle.unit } >Rs</span>
                </div>
            </div>
          </div>
          <div className={ cstyle.priceContainer }>
            <motion.button whileTap={{
              scale:0.8
            }} className={ cstyle.price } >Buy Now
            </motion.button>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide className={ cstyle.item }>
        <motion.div
          href="http://"
          className={cstyle.link}
          whileHover={{
            boxShadow: "4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          <div className={cstyle.card}>
            <img
              src="/card2.webp"
              alt="No image"
              className={` ${cstyle.cImage} cimg`}
              />
            <div className={cstyle.dealer}>
              <img
                src="/testImg.png"
                alt="No Image"
                className={cstyle.circle}
              />
              <span className={cstyle.name}>Muhammad Muhib Mirza</span>
            </div>
            <div className={ cstyle.location }>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={ cstyle.locIcon }
              >
                <path
                  d="M6.87501 0C5.0523 0.00215029 3.30487 0.727169 2.01602 2.01602C0.727176 3.30486 0.00215761 5.0523 7.3143e-06 6.875C-0.00217574 8.36452 0.48437 9.81361 1.38501 11C1.38501 11 1.57251 11.2469 1.60313 11.2825L6.87501 17.5L12.1494 11.2794C12.1769 11.2463 12.365 11 12.365 11L12.3656 10.9981C13.2658 9.81226 13.7521 8.36383 13.75 6.875C13.7479 5.0523 13.0228 3.30486 11.734 2.01602C10.4451 0.727169 8.69771 0.00215029 6.87501 0ZM6.87501 9.375C6.38056 9.375 5.89721 9.22838 5.48608 8.95367C5.07496 8.67897 4.75453 8.28852 4.56531 7.83171C4.37609 7.37489 4.32658 6.87223 4.42304 6.38727C4.51951 5.90232 4.75761 5.45686 5.10724 5.10723C5.45687 4.7576 5.90233 4.5195 6.38728 4.42304C6.87224 4.32657 7.3749 4.37608 7.83172 4.5653C8.28853 4.75452 8.67898 5.07495 8.95368 5.48607C9.22839 5.8972 9.37501 6.38055 9.37501 6.875C9.37418 7.53779 9.11052 8.17319 8.64186 8.64185C8.1732 9.11052 7.5378 9.37417 6.87501 9.375Z"
                  fill="#454545"
                />
              </svg>
              <span className={ cstyle.locName }>
                Lahore
              </span>
              <span className={ cstyle.sale }>
                Sale
              </span>
            </div>
            <div className={ cstyle.info }>
                <div className={ cstyle.iconContainer }>
                <img src="/bed.png" alt="Rooms" className={ cstyle.rpic } />
                <span className={ cstyle.rno }>2</span>
                </div>
                <div className={` ${ cstyle.iconContainer2 } `}>
                <img src="/bathtub.png" alt="Rooms" className={ cstyle.bpic } />
                <span className={ cstyle.rno }>1</span>
                </div>
                <div className={ cstyle.pkPrice } >
                  200,000
                  <span className={ cstyle.unit } >Rs</span>
                </div>
            </div>
          </div>
          <div className={ cstyle.priceContainer }>
            <motion.button whileTap={{
              scale:0.8
            }} className={ cstyle.price } >Buy Now
            </motion.button>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide className={ cstyle.item }>
        <motion.div
          href="http://"
          className={cstyle.link}
          whileHover={{
            boxShadow: "4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          <div className={cstyle.card}>
            <img
              src="/card2.webp"
              alt="No image"
              className={` ${cstyle.cImage} cimg`}
              />
            <div className={cstyle.dealer}>
              <img
                src="/testImg.png"
                alt="No Image"
                className={cstyle.circle}
              />
              <span className={cstyle.name}>Muhammad Muhib Mirza</span>
            </div>
            <div className={ cstyle.location }>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={ cstyle.locIcon }
              >
                <path
                  d="M6.87501 0C5.0523 0.00215029 3.30487 0.727169 2.01602 2.01602C0.727176 3.30486 0.00215761 5.0523 7.3143e-06 6.875C-0.00217574 8.36452 0.48437 9.81361 1.38501 11C1.38501 11 1.57251 11.2469 1.60313 11.2825L6.87501 17.5L12.1494 11.2794C12.1769 11.2463 12.365 11 12.365 11L12.3656 10.9981C13.2658 9.81226 13.7521 8.36383 13.75 6.875C13.7479 5.0523 13.0228 3.30486 11.734 2.01602C10.4451 0.727169 8.69771 0.00215029 6.87501 0ZM6.87501 9.375C6.38056 9.375 5.89721 9.22838 5.48608 8.95367C5.07496 8.67897 4.75453 8.28852 4.56531 7.83171C4.37609 7.37489 4.32658 6.87223 4.42304 6.38727C4.51951 5.90232 4.75761 5.45686 5.10724 5.10723C5.45687 4.7576 5.90233 4.5195 6.38728 4.42304C6.87224 4.32657 7.3749 4.37608 7.83172 4.5653C8.28853 4.75452 8.67898 5.07495 8.95368 5.48607C9.22839 5.8972 9.37501 6.38055 9.37501 6.875C9.37418 7.53779 9.11052 8.17319 8.64186 8.64185C8.1732 9.11052 7.5378 9.37417 6.87501 9.375Z"
                  fill="#454545"
                />
              </svg>
              <span className={ cstyle.locName }>
                Lahore
              </span>
              <span className={ cstyle.sale }>
                Sale
              </span>
            </div>
            <div className={ cstyle.info }>
                <div className={ cstyle.iconContainer }>
                <img src="/bed.png" alt="Rooms" className={ cstyle.rpic } />
                <span className={ cstyle.rno }>2</span>
                </div>
                <div className={` ${ cstyle.iconContainer2 } `}>
                <img src="/bathtub.png" alt="Rooms" className={ cstyle.bpic } />
                <span className={ cstyle.rno }>1</span>
                </div>
                <div className={ cstyle.pkPrice } >
                  200,000
                  <span className={ cstyle.unit } >Rs</span>
                </div>
            </div>
          </div>
          <div className={ cstyle.priceContainer }>
            <motion.button whileTap={{
              scale:0.8
            }} className={ cstyle.price } >Buy Now
            </motion.button>
          </div>
        </motion.div>
        </SwiperSlide>
        </Swiper>        
        </motion.div>
        <Fotter />
    </>
  )
}