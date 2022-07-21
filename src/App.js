import React from 'react';
import '../src/reset-css.css';
import './App.css';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import data from './data.json';

function App() {
  const plans = data.plans;

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <section className='section'>
              {[...plans].map((item) => {
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
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
