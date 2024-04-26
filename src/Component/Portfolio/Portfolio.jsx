import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Book Store",
    img: "https://i.ibb.co/GC5DTfF/Book-Store.png",
    desc: "frontend: material ui, react-stripe-js,axios, firebase,moment , react-dom, react-icons, react-router-dom, recharts, sass, sort-by, sweetalert2, react-hook, private-route,context-api.backend: body-parser, cloudinary, cors, dotenv, express, jsonwebtoken, moment,mongoose, nodemon, stripe",
    link:"https://book-store-e72a5.web.app"
  },
  {
    id: 2,
    title: "Food-Buzz",
    img: "https://i.ibb.co/4F8WHDF/FoodBuzz.png",
    desc: "frontend: aos, daisyui, firebase, localforage, match-sorter, react, react-dom, react-responsive-carousel, react-router-dom, react-tabs, sort-by, sweetalert2, swiper. backend: cors, dotenv, express, mongodb.",
    link:"https://restaurant-manag.web.app"
  },
  {
    id: 3,
    title: "Restaurant-management",
    img: "https://i.ibb.co/7QZWsSf/Screenshot-2023-12-12-112342.png",
    desc: "frontend: tanstack/react-query, animate, axios, firebase, number-counter, animate-on-scroll,react-dom,react-fast-marquee,react-hook-form,react-icons,react-paralla x,react-router-dom, react-select, react-slick, react-star-ratings, sort-by, sweetalert2, swiper, backend: cors, dotenv, express, jsonwebtoken, moment, nodemon,",
    link:"https://parcel-management-44e15.web.app"
  },
  {
    id: 4,
    title: "Sports",
    img: "https://i.ibb.co/BCBm0hL/sports-shoes.png",
    desc: "frontend: reduxjs/toolkit, axios, dayjs, react, react-circular-progressbar, react-icons, react-infinite-scroll,react-lazy-load-image-component,react-player,react-redux,react-route r-dom, react-select, sass, sort-by",
    link:"https://shopping-store-810ea.web.app"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section >
      <div className="container ">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer " style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link to={`${item.link}`}><button>See Demo</button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Project</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item}></Single>
      ))}
    </div>
  );
};

export default Portfolio;
