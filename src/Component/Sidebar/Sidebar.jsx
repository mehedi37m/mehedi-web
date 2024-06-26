import { useState } from "react";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import "./sidebar.scss"
import { motion } from "framer-motion";


const variants = {
    open:{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:30,
        }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    },
  }

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div initial={false} className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links></Links>
            </motion.div>
            <ToggleButton setOpen={setOpen}></ToggleButton>
        </motion.div>
    );
};

export default Sidebar;