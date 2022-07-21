import React from "react";
import './Card.css';
import icon1 from '../../imgs/icon1.png';
import icon2 from '../../imgs/icon2.png';
import icon3 from '../../imgs/icon3.png';
import icon4 from '../../imgs/icon4.png';

export const Card = ({
  logo,
  price,
  type,
  subtitle,
  text,
  cashback,
  iconNum }) => {
  return (
    <div className={iconNum === '2' ? 'card color-blue' : 'card'}>
      <img
        src={
          iconNum === '1' ? icon1 :
            iconNum === '2' ? icon2 :
              iconNum === '3' ? icon3 : icon4
        }
        alt={logo}
        className="card__img" />
      <h2 className="card__price">{price}</h2>
      <h3 className="card__type">{type}</h3>
      <p className={iconNum === '2' ? 'card__subtitle color-white' : 'card__subtitle'}>{subtitle}</p>
      <p className={iconNum === '2' ? 'card__text color-white' : 'card__text'}>{text}</p>
      <h2 className="card__cashback">{cashback}</h2>
      <p className={iconNum === '2' ? 'card__cashback-text color-white' : 'card__cashback-text'}>Cash Back</p>
      <button className="card__button">Get started</button>
    </div>
  )
}