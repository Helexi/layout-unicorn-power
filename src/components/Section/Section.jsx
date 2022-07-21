import React from "react";
import './Section.css';
import data from '../../data.json';
import { Card } from '../Card/Card';

export const Section = () => {
  return (
    <section className='section'>
      {data.plans.map((item) => {
        return (
          <Card key={item.id}
            iconNum={item.logo.replace(/\D/g, '')}
            logo={item.logo}
            price={item.price}
            type={item.type}
            subtitle={item.subtitle}
            text={item.text}
            cashback={item.cashback}
          />
        )
      })}
    </section>
  )
}

