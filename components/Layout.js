
import Navbar from "./Navbar"


const Layout = ({ children }) => {
  return (

    
    <div className="flex">
       
      { children }
      <Navbar />
    </div>
  );
}
 
export default Layout;