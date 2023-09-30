import React from 'react';
import '../CSS/Home.css';
import { Navbar } from './Navbar';
import { Product } from './Product';

export const Home = () => {
  return (
    <div className='wrapper'>
        <Navbar />
        <Product />
    </div>
  )
}
