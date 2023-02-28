import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input
          type="search"
          name="searchProduct"
          id="search-product"
          placeholder="Search products"
        />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
