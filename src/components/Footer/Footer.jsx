import React from "react";
import './Footer.css';
import ball from '../../imgs/social/ball.png';
import inst from '../../imgs/social/inst.png';
import twitter from '../../imgs/social/twitter.png';
import youtube from '../../imgs/social/youtube.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <footer className="footer">
          <Link className="footer__logo link" to="/">LOGO</Link>
          <ul className="footer__links-ul">
            <li className="footer__links-li-p">
              <p className="footer__links-p">USEFUL LINKS</p>
            </li>
            <li className="footer__links-li">
              <Link className="footer__links-a link" to="/">Cookie Policy</Link>
            </li>
            <li className="footer__links-li">
              <Link className="footer__links-a link" to="/">Terms {`&`} Conditions</Link>
            </li>
            <li className="footer__links-li">
              <Link className="footer__links-a link" to="/">Privacy Policy</Link>
            </li>
            <li className="footer__links-li">
              <Link className="footer__links-a link" to="/">Complaints Policy</Link>
            </li>
            <li className="footer__links-li">
              <Link className="footer__links-a link" to="/">Contact Us</Link>
            </li>
          </ul>
          <ul className="footer__contact-us-ul">
            <p className="footer__contact-us-p">CONTACT US</p>
            <li>Turner Little Limited<br />
              Registered in England No. 3490752<br />
              Vat No. 764466206<br />
              <br />
              Registered Office:<br />
              Fanshawe House<br />
              Pioneer Business Park<br />
              Amy Johnson Way<br />
              York<br />
              YO30 4TN<br />
              <br />
              Or message us on<br />
              <a 
                className="footer__contact-us-whatsApp link" 
                href="https://www.whatsapp.com"
                target="_blank" 
                rel="noreferrer" 
              >
                WhatsApp
              </a>
              Licensed by the Financial Conduct<br />
              Authority No. 734784
            </li>
          </ul>
          <div className="footer__social">
            <a
              className="footer__social-a link"
              target="_blank"
              rel="noreferrer"
              href='https://www.instagram.com'
            >
              <img className="social-logo" src={inst} alt="inst" />
            </a>
            <a 
              className="footer__social-a link" 
              target="_blank" 
              rel="noreferrer" 
              href="https://ru.wikipedia.org/wiki/Ball"
            >
              <img className="social-logo" src={ball} alt="ball" />
            </a>
            <a 
              className="footer__social-a link" 
              target="_blank" 
              rel="noreferrer" 
              href='https://twitter.com'
            >
              <img className="social-logo" src={twitter} alt="twitter" />
            </a>
            <a 
              className="footer__social-a link" 
              target="_blank" 
              rel="noreferrer" 
              href="https://www.youtube.com/"
            >
              <img className="social-logo" src={youtube} alt="youtube" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}