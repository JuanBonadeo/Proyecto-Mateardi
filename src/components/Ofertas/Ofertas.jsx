import { useEffect, useState } from 'react'
import { collection, getDocs, where, query } from 'firebase/firestore'
import ProductCard from "../ProductCard/ProductCard";
import { db } from '../../services/firebase/firebaseConfig'
import './Ofertas.css'
// const product = {
//     nombre: 'sapeee',
//     precio: 54000,
//     stock: true,
//     descuento: 45,
//     img1: 'https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/products%2Fmates%2Fmate%201%2Fmini-imperial.jpeg?alt=media&token=804f660c-a119-4e51-a009-c537beb2f4fe',

// }
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
            <h2>Ofertas</h2>
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
