import { Link } from 'react-router-dom';
import garlicBreadImage from './assets/garlic_bread.jpeg';
import greekSaladImage from './assets/salad_greek.jpeg';
import lemonCakeImage from './assets/lemon_cake.jpeg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Salad',
    image: greekSaladImage,
    price: '$10.50',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud `,
  },
  {
    name: 'Garlic Bread',
    image: garlicBreadImage,
    price: '$5.50',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud`,
  },
  {
    name: 'Lemon Cake',
    image: lemonCakeImage,
    price: '$10.50',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>Weeks' Specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
