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
    x: "200%",
    transition: {
        repeat:Infinity,
      duration: 20,
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
              sequence={["Web Developer and MERN Developer", 600]}
              repeat={Infinity}
              cursor={false}
            />
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
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

      <div className="slidingTextContainer">Writer content creator</div>

      <div className="imageContainer">
        <img src="/public/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
