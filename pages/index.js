import Carousel from './Component/Carousel'
import Searchbar from './Component/SearchBar';
import style from "../styles/Section.module.css";
import { motion } from 'framer-motion';
import { useState } from 'react';

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
        staggerChildren:0.2
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
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5
          }}
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
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5
          }}
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
            duration:0.5
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
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5
          }}
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
          transition={{
            type:"tween",
            ease:"easeInOut",
            duration:0.5
          }}
          >
            Industrial
          </motion.div>
        </motion.a>
      </motion.div>
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
    </>
  )
}