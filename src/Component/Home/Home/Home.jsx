import Contact from "../../Contact/Contact";
import Cursor from "../../Cursor/Cursor";
import Hero from "../../Hero/Hero";
import Navbar from "../../Navbar/Navbar";
import Parallax from "../../Parallax/Parallax";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../../Services/Services";
import "./Home.scss";
import Test from "./Test";

const Home = () => {
  return (
    <div>
      <Cursor></Cursor>
      <section id="HomePage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section >
        <Parallax type="services"></Parallax>
      </section>
      <section id="Services">
        <Services></Services>
      </section>
      <section >
        <Parallax type="portfolio" />
      </section>
     <section id="Project"> <Portfolio></Portfolio></section>
      <section id="Contact"> 
      <Contact></Contact>
      </section>
      {/* <section id="About"> About</section> */}
      {/* <Test></Test>
           <Test></Test> */}
           
    </div>
  );
};

export default Home;
