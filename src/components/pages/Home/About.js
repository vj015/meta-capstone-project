import marioAdrian1Image from './assets/mario_adrian1.jpeg';
import './About.css';

const About = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={marioAdrian1Image} alt="Chefs Mario and Adrian" />

      </div>
    </section>
  );
};

export default About;
