import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Admin from "./pages/Admin";

function App() {
  const location = useLocation();

  // 🔥 Loader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // ⏳ Show loader first
  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      {/* 🎬 Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          <Route
            path="/team"
            element={
              <PageWrapper>
                <Team />
              </PageWrapper>
            }
          />

          <Route
            path="/admin"
            element={
              <PageWrapper>
                <Admin />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;