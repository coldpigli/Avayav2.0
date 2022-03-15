import { Route, Link,Routes } from "react-router-dom";
import { NavBar } from "./components";
import { Cart, ErrorPage, Home, ProductListing, Wishlist } from "./routes";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductListing/>}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
