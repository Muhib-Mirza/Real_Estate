import React, { useState } from 'react';
import { motion } from 'framer-motion';
import style from "../styles/Count.module.css";

const Count = () => {
    const parent = {
        hidden:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration:2,
                staggerChildren:2
            }
        }
    }
    const child = {
        hidden:{
            opacity:0,
            x:-100
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                type:"spring",
                stiffness:130,
                duration:0.2
            }
        }
    }
    return ( 
        <>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt iure accusamus provident. Nisi ab eaque, maxime dolore itaque, non laborum maiores nemo commodi atque est neque exercitationem unde necessitatibus.</p>
        <motion.div className={ style.container } 
        variants={ parent }
        initial={"hidden"}
        whileInView={"animate"}
        >
            <motion.div className={ style.item } 
            variants={ child }
            >1</motion.div>
            <motion.div className={ style.item } variants={ child }>2</motion.div>
            <motion.div className={ style.item } variants={ child }>3</motion.div>
            <motion.div className={ style.item } variants={ child }>4</motion.div>
        </motion.div>
        </>
     );
}
 
export default Count;