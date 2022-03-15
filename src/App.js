import { Route, Link,Routes } from "react-router-dom";
import { Cart, ErrorPage, Home, Wishlist } from "./routes";


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Wishlist">Wishlist</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
