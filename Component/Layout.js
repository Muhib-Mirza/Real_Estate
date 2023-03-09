import Navbar from "./Navbar";
import Fotter from "./Fotter";

const Layout = ({ children }) => {
    return ( 
        <>
        <Navbar />
        {children}
        </>
     );
}
 
export default Layout;