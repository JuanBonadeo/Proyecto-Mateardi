import { Navigate, Route, Routes } from 'react-router-dom';
import {HomeView, ProductInfoView, Cart, CodigoDescuento, Admin, GraciasXtuCompra, FinishPurchase} from '../views/';
import { ProductsContainer } from '../components';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/marca/:marcaId" element={<ProductsContainer />} />
            <Route path="/marca/:marcaId/categoria/:categoriaId" element={<ProductsContainer />} />
            <Route path="/categoria/:categoriaId" element={<ProductsContainer />} />
            <Route path="/producto/:productId" element={<ProductInfoView />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/productos" element={<ProductsContainer />} />
            <Route path="/codigodescuento" element={<CodigoDescuento />} />
            <Route path="/terminarcompra" element={<FinishPurchase />} />
            <Route path="/cargarProductos" element={<Admin />} />
            <Route path='/gracias' element={<GraciasXtuCompra />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    )
}
