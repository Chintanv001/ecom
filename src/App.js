import logo from './logo.svg';
import './App.css';
import ProductPage from './component/productPage/productPage';
import { Routes , Route } from 'react-router-dom';
import { MobileData } from './component/productPage/mobileData';
import { LaptopData } from './component/productPage/LaptopData';
import Navbar from './component/Navbar/Navbar';
import Cart from './component/Cart/Cart';
import ProductDetails from './component/productDetails/ProductDetails';
function App() {
  
  return (
    
    <div className="App">
    <Navbar/>
      <ProductPage/>
      <Routes>
        <Route path='/mobile' element={<MobileData/>}/>
        <Route path='/laptop' element={<LaptopData/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/laptop/:productDetails' element={<ProductDetails/>}/>
        <Route path='/mobile/:productDetails' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
