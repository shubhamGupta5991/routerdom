import About from "./component/About";
import {Routes,Route} from 'react-router-dom';
import Home from "./component/Home";
import Nav from "./component/Nav";
import OrderSummary from "./component/orderSummary";
import NoMatch from "./component/NoMatch";
import Products from "./component/Products";
import FeaturedProduct from "./component/FeaturedProduct";
import NewProducts from "./component/NewProducts";

function App() {
 
  return (
   <>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="order-summary" element={<OrderSummary/>}/>
    <Route path="Products" element={<Products/>}>
      <Route index element={<FeaturedProduct/>}/>
      <Route path='featured' element={<FeaturedProduct/>}/>
      <Route path='new' element={<NewProducts/>}/>
    </Route>
    <Route path="*" element={<NoMatch/>}/>
   </Routes>

  
   </>
  //  if we want to show child route's content by default under parent route then we have to define a new route but instead of giving path attribute we have to give index attribute just and element
  );
}
// here * in path in Route is selected when no route is matched if we don't create route for noMatch our page will show no information regarding that although console will show warning msg;

export default App;
