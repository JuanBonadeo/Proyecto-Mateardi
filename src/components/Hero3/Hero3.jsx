import React from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero3/hero3.css';

export const Hero3 = () => {

  return (
    <motion.div
      className="CombosContainer hero4"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 4, delay: 1, type: "spring", stiffness: 160, damping: 20 }}
    >
      <img
      src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/img2.jpg?alt=media&token=a1bfe023-ad75-4c1a-8106-12109638821a'
        alt='Combos'
        className='combosImg'
      />
      <div className="info"> 
        <h2>¡Visítanos en nuestro local!</h2>
        <p>
        📍 Bacacay 2938, Paseo Imperial, Flores, Cap Fed. <br />
        Abierto de Lunes a Sábado, de 10:00 a 19:00 hs.
        <hr />
        </p>
        <h2>Descubre la Experiencia del Mate Deluxe</h2>
        <p> Mates Imperiales y Termos de Alta Calidad, Directo a Tu Hogar </p>
        <Button label='Ver Colección' to='/destacados' />
       
      </div>
    </motion.div>
  );
};




