import logo from './logo.svg';
import './App.css';
import ProductPage from './component/productPage/productPage';
import { Routes , Route } from 'react-router-dom';
import { MobileData } from './component/productPage/mobileData';
import { LaptopData } from './component/productPage/LaptopData';
import Navbar from './component/Navbar/Navbar';
import Cart from './component/Cart/Cart';
import ProductDetails from './component/productDetails/ProductDetails';
import Login from './component/Login/Login';
import SignUp from './component/Signup/Signup';
function App() {
  
  return (
    
    <div className="App">
      
      <Routes>
        <Route path='/*' element={<><Navbar/><ProductPage/></>}/>
        <Route path='/mobile' element={<><Navbar/><ProductPage/><MobileData/></>}/>
        <Route path='/laptop' element={<><Navbar/><ProductPage/><LaptopData/></>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<><Login/></>}/>
        <Route path='/signup' element={<><SignUp/></>}/>
        <Route path='/laptop/:productDetails' element={<ProductDetails/>}/>
        <Route path='/mobile/:productDetails' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
