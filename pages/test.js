// import axios from "axios";
import style from "@/styles/Test.module.css"
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineHome , HiPhone , HiOutlineUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsPersonCircle } from "react-icons/bs";

// export async function getServerSideProps(context){
//     const res = await axios.get("http://localhost:4000/alldata");
//     return{
//         props:{
//             data:res.data
//         }
//     }
// }

const Test = ({data}) => {
    return ( 
        <>
        <div className={ style.drawer }>
          <div className={style.title}>
          <h2 className={style.logo}>
            Dream Villa
          </h2>
          <RxCross1 className={style.cross} />
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
        </div>
        {/* {
            data.data.map(Elem=>{
                const image = btoa(
                    String.fromCharCode(...new Uint32Array(Elem.image.data.data)));
                return <div key={Elem._id} >
                    <div>
                        {
                            Elem.username
                        }
                    </div>
                    <div>
                        {
                            Elem.email
                        }
                    </div>
                    <div className={style.circle}>
                    <img src={`data:img/png;base64,${image}`} alt="" className={ style.circleImage } />
                    </div>
                </div>
            })
        } */}
        </>
     );
}
 
export default Test;