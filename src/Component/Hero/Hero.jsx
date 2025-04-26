import "./Hero.scss";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";



const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity: 0,
    y:10,
    transition: {
        duration:2,
        repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
        repeat:Infinity,
        repeatType: "mirror",
      duration: 20,
    },
  },
  
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>MEHEDI HASAN</motion.h1>
          {/* <h2>Web Developer and MERN Developer</h2> */}
          <motion.h2 variants={textVariants}>
            <TypeAnimation
              sequence={["Web Developer", 600,
              "MERN Developer", 600,
              "Nextjs Developer", 600,
              "Nodejs Developer", 600,
              ]}
              repeat={Infinity}
              cursor={false}
            />
          </motion.h2>
          <motion.div variants={textVariants} className=" buttons">
            <motion.button variants={textVariants}>
              See the Latest Works 
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
          animate="scrollButton"
            variants={textVariants}
            src="./public/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >Love Programming</motion.div>

      <div className="imageContainer">
        
        <img src="https://i.ibb.co/nmtk70r/Whats-App-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
