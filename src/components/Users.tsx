import { Link, Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const userStyles = {
    display: "flex",
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div style={userStyles}>
      <nav>
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>
        <Link to="admin">Admin</Link>
      </nav>
      <Outlet />
      <div>
        <button
          type="button"
          onClick={() => setSearchParams({ filter: "active" })}
        >
          Active Users
        </button>
        <button type="button" onClick={() => setSearchParams({})}>
          Reset filter
        </button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
}

export default Users;
