import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NewArrival from "./pages/NewArrival";
import Product from "./pages/Product";
import CategoryPage from "./pages/CategoryPage";
import ProductInfo from "./pages/ProductInfo";
import BestSellers from "./components/BestSellers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newarrival" element={<NewArrival />} />
            <Route path="/bestseller" element={<BestSellers />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:category" element={<CategoryPage />} />
            <Route path="/product/info/:productid" element={<ProductInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
