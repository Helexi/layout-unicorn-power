import React from "react";
import './Section.css';
import data from '../../data.json';
import { Card } from '../Card/Card';

export const Section = () => {
  // const plans = data.plans;

  return (
    <section className='section'>
      {data.plans.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Card
              iconNum={item.logo.replace(/\D/g, '')}
              logo={item.logo}
              price={item.price}
              type={item.type}
              subtitle={item.subtitle}
              text={item.text}
              cashback={item.cashback}
            />
          </React.Fragment>
        )
      })}
    </section>
  )
}

