import style from "../../styles/SearchBar.module.css"
import { motion } from "framer-motion"

const Searchbar = () => {
    return ( 
        <>
        <div className={style.search}>
        <div className={style.searchBar}>
        <div className={style.container}>
          <label htmlFor="property_type" className={style.label}>Property Type</label>
          <input type="text" name='property_type' className={`${style.inpt} ${style.field}`} placeholder="Resedential" />
        </div>
        <div className={style.container}>
        <label htmlFor="property_type" className={style.label}>Location</label>
        <input type="text" className={`${style.inpt} ${style.field}`} placeholder="Search Location" />
        </div>
        <div className={style.container}>
        <label htmlFor="property_type" className={style.label}>Price Limit</label>
        <input type="number" className={`${style.inpt} ${style.field}`} placeholder="100,000" />
        </div>
        <motion.button className={`${style.inpt} ${style.searchBtn}`}
        whileTap={{
          scale:0.8
        }}
        transition={{
          type:"tween",
          duration:0.2,
          ease:"easeInOut"
        }}
        >Search</motion.button>
      </div>
      </div>
        </>
     );
}
 
export default Searchbar;