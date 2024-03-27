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
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="Services">
        <Parallax type="services"></Parallax>
      </section>
      <section>
        <Services></Services>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio></Portfolio>
      <section id="Contact"> Contact</section>
      <section id="About"> About</section>
      {/* <Test></Test>
           <Test></Test> */}
    </div>
  );
};

export default Home;
