import { useEffect, useState } from 'react'
import { collection, getDocs, where, query } from 'firebase/firestore'
import ProductCard from "../ProductCard/ProductCard";
import { db } from '../../services/firebase/firebaseConfig'
import './Ofertas.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Loader } from '../Loader/Loader';

var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 948,
            settings: {
                slidesToShow: 1.8,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const Ofertas = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchProducts = async () => {
        setLoading(true)
        try {
            const productsRef = query(collection(db, 'products'), where('descuento', '>', 0))
            const snapShot = await getDocs(productsRef);
            const productosAdapted = snapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if(productosAdapted.length < 3) return
            setProducts(productosAdapted);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts()
        
    }, [])
    

    return (
        <div className="sliderContainer">
            <h2>Nuestras Ofertas</h2>
            { loading 
            ? <Loader/>
            : 
            <Slider {...settings} className="slides">
            {products.map(product => <><ProductCard key={product.id} {...product}/></>)}

            </Slider>
            }
            
        </div>
    );
}
