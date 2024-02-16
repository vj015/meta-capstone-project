import client1Image from './assets/client1.jpeg';
import client2Image from './assets/client2.jpeg';
import client3Image from './assets/client3.jpeg';
import client4Image from './assets/client4.jpeg';
import './Reviews.css';
import ReviewCard from './ReviewCard';

const customers = [
  {
    fullName: 'Shelly',
    image: client1Image,
    rating: [1, 1, 1, 1, 1],
    says: `Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat `,
  },
  {
    fullName: 'Mark',
    image: client2Image,
    rating: [1, 1, 1, 1, 1],
    says: 'Duis aute irure dolor in reprehenderit in volupt' ,
  },
  {
    fullName: 'Alex',
    image: client3Image,
    rating: [1, 1, 1, 1, 0],
    says: `Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat `,
  },
  {
    fullName: 'Jimmy',
    image: client4Image,
    rating: [1, 1, 1, 1,1 ],
    says: `Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat `,
  },
];

const Reviews = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Our Reviews!</h2>
        {customers.map((customer, index) => 
          <ReviewCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Reviews;
