import Hero from '../../Hero/Hero';
import Navbar from '../../Navbar/Navbar';
import './Home.scss'
import Test from './Test';

const Home = () => {
    return (
        <div>
           <section id='Homepage'> 
            <Navbar></Navbar>
            <Hero></Hero>
           </section>
           <section id='Hero'> Parallax</section>
           <section id='Services'> Services</section>
           <section id='Portfolio'>portfolio</section>
           <section> Hero</section>
           <section> Hero</section>
           {/* <Test></Test>
           <Test></Test> */}
        </div>
    );
};

export default Home;