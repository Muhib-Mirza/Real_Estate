import style from "../styles/homepage/About.module.css"
import CountUp from "react-countup";
import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
    const [flag,setFlag] = useState({
        years:false,
        property:false,
        realtor:false,
    })
    return ( 
        <>
        <div className={ style.container }>
            <img src="/about.jpg" alt="About" className={ style.image } />
            <div className={ style.aboutSection }>
                <div className={ style.text }>
                    About Us
                </div>
                <div className={ style.aboutHead }>
                    Dream Villa A Real Estate Company
                </div>
                <p className={ style.aboutText }>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                </p>
                <div className={ style.counterContainer }>
                        <div className={ style.years }>
                            <motion.div
                            whileInView={()=>setFlag({years:true})}
                            >
                                {
                                    flag.years ?
                                    <h1>
                                        <CountUp end={50} duration={1.2} />
                                    </h1>
                                    :
                                    <h1>0</h1>
                                }
                                
                            </motion.div>
                                <h3>
                                YEARS OF EXPERIENCED
                                </h3>
                                </div>
                                <div className={style.realtor}>
                            <motion.div
                            whileInView={()=>setFlag({years:true, property:true})}
                            >
                                {
                                    flag.years ?
                                    <h1>
                                        <CountUp end={210} duration={1.2} />
                                        <span className={ style.postfix }>K+</span>
                                    </h1>
                                    :
                                    <h1>0</h1>
                                }
                                
                            </motion.div>
                                <h3>
                                TOTAL PROPERTIES
                                </h3>
                                </div>
                                <div className={style.realtor}>
                            <motion.div
                            whileInView={()=>setFlag({years:true, property:true,realtor:true})}
                            >
                                {
                                    flag.years ?
                                    <h1>
                                        <CountUp end={450} duration={1.2} />
                                    </h1>
                                    :
                                    <h1>0</h1>
                                }
                                
                            </motion.div>
                                <h3>
                                QUALIFIED REALTORS
                                </h3>
                                </div>
                                <div className={style.realtor}>
                            <motion.div
                            whileInView={()=>setFlag({years:true, property:true,realtor:true})}
                            >
                                {
                                    flag.years ?
                                    <h1>
                                        <CountUp end={100} duration={1.2} />
                                    </h1>
                                    :
                                    <h1>0</h1>
                                }
                                
                            </motion.div>
                                <h3>
                                TOTAL BRANCHES
                                </h3>
                                </div>
                </div>
            <img src="/work-1.jpg" alt="Home Pic" className={ style.aboutPic } />
            </div>
        </div>
        </>
     );
}
 
export default About;