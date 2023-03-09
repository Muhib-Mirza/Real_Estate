import style from "../styles/homepage/Navbar.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import React from 'react';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsPersonCircle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineHome , HiPhone , HiOutlineUserGroup } from "react-icons/hi";

const Navbar = () => {
  const onHover = {
    hover: {
      scale: 1.2,
      fontWeight: "500",
    },
  };
  const [flag, setFlag] = useState(false);
  const toggle = ()=>{
    setFlag(!flag);
    if(flag === true){
      document.querySelector(".mySwiper").style.filter = "blur(0)"
      document.querySelector(".search").style.filter = "blur(0)" 
      document.querySelector("body").style.overflow = "scroll"
    }else{
        document.querySelector("body").style.overflow = "hidden"
        document.querySelector(".mySwiper").style.filter = "blur(1.5px)"
        document.querySelector(".search").style.filter = "blur(1.5px)"
      }
  }
  return (
    <>
      <Head>
        <title>Dream Villa</title>
        <meta name="description" content="Dream Villa. All kind of Property is Availabla here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/house.png" />
      </Head>
      <nav className={style.navbar}>
        <div className={style.logo}>
          Dream Villa
          <div className={style.wname}>Real Estate Agency</div>
        </div>
        <div className={style.navListContainer}>
          <ul className={style.navList}>
            <a className={`${style.link} ${style.nomgn}`} href="/">
              <motion.li
                className={style.home}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 0.2,
                }}
              >
                Home
              </motion.li>
            </a>
            <a className={style.link} href=".about">
              <motion.li
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 0.2,
                }}
                className={style.mgn}
              >
                About
              </motion.li>
            </a>
            <a className={style.link} href="/contact">
              <motion.li
                className={style.mgn}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 0.2,
                }}
              >
                Contact
              </motion.li>
            </a>
            <a className={style.link} href="/property">
              <motion.li
                className={style.mgn}
                variants={onHover}
                whileHover={"hover"}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 0.2,
                }}
              >
                Property
              </motion.li>
            </a>
          </ul>
        </div>
        {/* Drawer Code */}
        <div className={style.drawerImage} onClick={toggle} >
          {
            !flag && <img src="/drawer.svg" alt="Drawer" className={style.drawerIcon} />
          }
        </div>
        <motion.div className={ style.drawer }
        initial={{
          x:"100vw"
        }
        }
        animate={
          flag ?{
            x:0
          }:{
            x:"100vw"
          }
        }
        transition={{
          type:"tween",
          ease:"easeIn",
          duration:0.2,
        }}
        >
          <div className={style.title}>
          <h2 className={style.drwerlogo}>
            Dream Villa
          </h2>
          <RxCross1 className={style.cross} onClick={toggle} />
          </div>
          <ul className={style.list}>
            <li className={style.listTile}>
            <a href="/" className={style.link}>
              <HiOutlineHome className={style.homeIcon} />
              <div className={style.headHome}>
              Home
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="/property" className={style.link}>
              <HiOutlineBuildingOffice2 className={style.homeIcon} />
              <div className={`${style.headHome} ${style.propt}`}>
              Property
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="/about" className={style.link}>
              <HiOutlineUserGroup className={style.homeIcon} />
              <div className={style.headHome}>
              About
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="/contact" className={style.link}>
              <HiPhone className={style.homeIcon} />
              <div className={`${style.headHome} ${style.propt}`}>
              Contact
              </div>
            </a>
            </li>
            <li className={style.listTile}>
            <a href="/login" className={style.link}>
              <BsPersonCircle className={style.homeIcon} />
              <div className={style.headHome}>
              Login
              </div>
            </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;