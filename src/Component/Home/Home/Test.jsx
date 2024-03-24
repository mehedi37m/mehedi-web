// import "./Home.scss"
import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
    const [open, setOpen] = useState(false);

 const variants = {
    visible: (i) =>({
      opacity:1, 
      x:100, 
      transition:{ delay: i* 0.2},
    }),
      hidden:{opacity:0},
 }

 const items = [
    "item1","item2","item3","item4","item5","item6","item7",
 ]

        // initial={{opacity: 0.5, scale: 0.5}}
        // animate={{ opacity: 1, scale: 1, x:200, y:200 }}
        // transition={{ duration: 2}}
        // whileHover={{opacity: 1, scale: 1,x:200, y:200}}
        // whileTap={{opacity: 1, scale: 1, x:200,y:200}}
        // whileInView={{opacity: 1, scale: 1,}} ,transition:{duration:2}
        // drag
        // staggerChildren

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        // animate="visible"
        transition={{ duration: 2}}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        
            {items.map((item, i)=><motion.li key={item} variants={variants} custom={i}>{item} </motion.li>)}

        
      </motion.ul>
    </div>
  );
};

export default Test;
