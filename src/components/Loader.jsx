import { motion } from "framer-motion";

function Loader() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#020617"
    }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #3b82f6",
          borderTop: "5px solid transparent",
          borderRadius: "50%"
        }}
      />
    </div>
  );
}

export default Loader;