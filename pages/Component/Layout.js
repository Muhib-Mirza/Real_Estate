import Navbar from "./Navbar";
import Fotter from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <>
        <Navbar />
        {children}
        <Fotter />
        </>
     );
}
 
export default Layout;