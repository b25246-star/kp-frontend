import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "../firebase";

function Team() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const snapshot = await getDocs(collection(db, "teams"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTeams(data);
    };
    fetchTeams();
  }, []);

  return (
    <div style={{ padding: "4rem 2rem" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>
        Meet Our Team
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        marginTop: "3rem"
      }}>
        {teams.map(member => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            style={{
              background: "rgba(30,41,59,0.7)",
              padding: "2rem",
              borderRadius: "16px",
              textAlign: "center"
            }}
          >
            <div style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "#3b82f6",
              margin: "auto"
            }} />

            <h3 style={{ marginTop: "1rem" }}>{member.name}</h3>
            <p style={{ color: "#94a3b8" }}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;