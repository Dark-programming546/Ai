import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-center gap-6 shadow">
      <Link to="/" className="hover:underline font-semibold">Home</Link>
      <Link to="/dashboard" className="hover:underline font-semibold">Dashboard</Link>
      <Link to="/about" className="hover:underline font-semibold">About</Link>
    </nav>
  );
}

export default Navbar;
