import { Route, Routes } from "react-router-dom";
import Home from "components/Home";
import NavBar from "components/NavBar";
import OrderSummary from "components/OrderSummary";
import NoMatch from "components/NoMatch";
import Products from "components/Products";
import FeaturedProducts from "components/FeaturedProducts";
import NewProducts from "components/NewProducts";
import Users from "components/Users";
import UserDetail from "components/UserDetail";
import Admin from "components/Admin";
import React from "react";
import Profile from "components/Profile";
import { AuthProvider } from "utils/auth";
import Login from "components/Login";
import RequireAuth from "components/RequireAuth";
// import About from "components/About";
const LazyAbout = React.lazy(() => import("components/About"));

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="users/admin" element={<Admin />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* path="*" * wildcard dung dau will catch all no match route */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
