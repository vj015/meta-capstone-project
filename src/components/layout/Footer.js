import {
  faFacebook,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoWhiteImage from './assets/logo-white.png';
import pages from '../../utils/pages';

const contacts = [
  { icon: faLocationDot, info: '#123 Downtown, Chicago', },
  { icon: faPhone, info: '(123) 345-2123', },
  { icon: faEnvelope, info: 'hi@littlelemon.com', },
];

const socials = [
  { icon: faInstagram, name: 'instagram', },
  { icon: faFacebook, name: 'facebook', },
  { icon: faYoutube, name: 'youtube', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img 
          className="site-footer-logo" 
          src={logoWhiteImage} 
          alt="Little Lemon" 
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => 
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => 
            <a 
              key={index} 
              href={`https://www.${social.name}.com`} 
              target="_blank" 
              rel="noreferrer" 
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
