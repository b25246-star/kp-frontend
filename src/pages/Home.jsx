import { motion } from "framer-motion";

function Home() {
  return (
    <div style={{
      height: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "3.5rem" }}
      >
        KP Dev Cell 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: "#94a3b8" }}
      >
        Empowering developers. Building the future.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ marginTop: "2rem" }}
      >
        Explore Team
      </motion.button>
    </div>
  );
}

export default Home;