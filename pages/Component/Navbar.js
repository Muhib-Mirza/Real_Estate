import style from "../../styles/Navbar.module.css";
import { easeIn, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import React from 'react';

const Navbar = () => {
  const onHover = {
    hover: {
      scale: 1.2,
      fontWeight: "500",
    },
  };
  const [flag, setFlag] = useState(false);
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
        <div className={ style.mobileNav }>
          <motion.img src="/drawer.svg" alt="" className={style.drawer} 
          whileTap={{
            scale:0.8,
          }}
          transition={{
            type:"spring",
            stiffness:180,
            duration:0.05
          }}
          onClick={ ()=>{console.log(flag);setFlag(!flag);} }
          />
          <motion.ul className={ style.mobileList }
          initial={{
            translateX:"-100vw",
            opacity:0,
          }}
          animate={
            flag ? {
              translateX:"0vw",
              opacity:1
            }:
            {
              translateX:"-100vw",
              opacity:0
            }
          }
          transition={{
            type:"spring",
            stiffness:150,
            duration:0.2,
            damping:12
          }}
          >
          <a className={style.link} href="/">
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
          </motion.ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;