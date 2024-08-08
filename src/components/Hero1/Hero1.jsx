import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '../../ui/';


export const Hero1 = () => {
  return (
    <Carousel interval={5000}>
      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1"
          src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/Todos%20los%20productos.png?alt=media&token=8dca98d6-11f0-4dab-b919-8bb5496e32e9'
          alt="First-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>
          <Button label='Comprar' to='/productos' />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/Mrteardi123%20(1)%20(1)%20(1).png?alt=media&token=3c5dd2ee-ed9c-4134-8c59-795ac0a6f602'
          alt="First-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/slider3.png?alt=media&token=8ebc3b73-b411-4dfd-97a7-a24bb3bf7f4b'
          alt="Third-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
