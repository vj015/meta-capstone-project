import { Link } from 'react-router-dom';
import restaurantImage from './assets/little_lemon.jpeg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a traditional Mediterranean restaurant, 
            delighting customers with its recipes since 2000s.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Book table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
