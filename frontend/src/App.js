import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import history from "./history";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/order/:id" element={<OrderScreen></OrderScreen>} />
            <Route
              path="/login/shipping"
              element={<ShippingScreen></ShippingScreen>}
            />
            <Route path="/payment" element={<PaymentScreen></PaymentScreen>} />
            <Route
              path="/placeorder"
              element={<PlaceOrderScreen></PlaceOrderScreen>}
            />
            <Route path="/login" element={<LoginScreen></LoginScreen>} />
            <Route
              path="/register"
              element={<RegisterScreen></RegisterScreen>}
            />
            <Route path="/profile" element={<ProfileScreen></ProfileScreen>} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen></CartScreen>} />
            <Route
              path="/admin/userlist"
              element={<UserListScreen></UserListScreen>}
            />
            <Route
              path="/admin/user/:id/edit"
              element={<UserEditScreen></UserEditScreen>}
            />
            <Route
              path="/admin/productlist"
              element={<ProductListScreen></ProductListScreen>}
            />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
