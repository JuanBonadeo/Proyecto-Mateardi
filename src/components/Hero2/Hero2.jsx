import React from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero2/hero2.css';

 export const Hero2 = () => {

  return (
    <motion.div
      className="CombosContainer"
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1 , scale: 1 }}
      transition={{ duration: 4, delay: 1,type:"spring", stiffness: 160, damping: 20}}
    >
      <div className="info">
        <h2>Mates y Termos personalizados</h2>
        <p>
        Paso 1: Realizar la compra de un Mate imperial o camionero, o de un termo.<br></br><br></br>

        Paso 2: Escribir vía WhatsApp al diseñador mencionándole tu número de orden Y tu idea de diseño.<br></br><br></br>

        Paso 3: Elegís la letra y los emojis que más te gusten!
        
        </p>
        <Button label='Encargar' to='https://wa.me/5493416701599' />
      </div>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/WhatsApp%20Image%202024-08-04%20at%2020.28.59.jpeg?alt=media&token=59ce8fb3-2fb6-49ee-ac3c-306e3ba78153'
        alt='Combos'
        className='combosImg'
      />
    </motion.div>
  );
};




