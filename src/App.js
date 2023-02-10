import React from 'react';
import { Counter } from './features/counter/counterFromReactDefault/Counter';
import './App.css';
import Header from './app/component/header/Header';
import { Fragment } from 'react';
import CreditCardForm from './app/component/form/CreditCardForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Payment from './app/component/payment/Payment';


const router = createBrowserRouter([
{ path: '/', element: <CreditCardForm />},
{ path: '/paymentSuccess', element: <Payment />}

]);

function App() {
  return (
  <Fragment>
      <Header />
    <RouterProvider router={router} />

  </Fragment>
  );
};
// <Counter />
export default App;
