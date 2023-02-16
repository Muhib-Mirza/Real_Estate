import style from "../styles/homepage/SearchBar.module.css"
import { motion } from "framer-motion"

const Searchbar = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
    return ( 
        <>
        <div className={style.search}>
        <form className={style.searchBar} onSubmit={handleSubmit}>
        <div className={style.container}>
          <label htmlFor="property_type" className={style.label}>Property Type</label>
          <input type="text" name='property_type' className={`${style.inpt} ${style.field}`} placeholder="Resedential" required />
        </div>
        <div className={style.container}>
        <label htmlFor="property_type" className={style.label}>Location</label>
        <input type="text" className={`${style.inpt} ${style.field}`} placeholder="Search Location" required />
        </div>
        <div className={style.container}>
        <label htmlFor="property_type" className={style.label}>Price Limit</label>
        <input type="number" className={`${style.inpt} ${style.field}`} placeholder="100,000" required />
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
        type="submit"
        >Search</motion.button>
      </form>
      </div>
        </>
     );
}
 
export default Searchbar;