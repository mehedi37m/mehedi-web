import './Navbar.scss'
import fb from "../../assets/facebook.png"
import ins from "../../assets/instagram.png"
import you from "../../assets/youtube.png"
// import dri from "../../assets/dribbble.png"
import { motion } from "framer-motion";
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
    return (
        <div className='navbar'>
            
            {/* sidebar */}
            <Sidebar></Sidebar>
            <div className='wrapper'>
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Lama Dev</motion.span>
                <div className="social">
                    <a href="#"> <img src={fb} alt="" /></a>
                    <a href="#"> <img src={ins} alt="" /></a>
                    <a href="#"> <img src={you} alt="" /></a>
                    <a href="#"> <img src={"./dribbble.png"} alt="" /></a>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;