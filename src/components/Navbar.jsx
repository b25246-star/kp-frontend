import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: "rgba(2, 6, 23, 0.7)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h2 style={{ color: "#3b82f6" }}>KP Dev Cell</h2>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/" style={{ color: "#e2e8f0" }}>Home</Link>
        <Link to="/team" style={{ color: "#e2e8f0" }}>Team</Link>
        <Link to="/admin" style={{ color: "#e2e8f0" }}>Admin</Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;