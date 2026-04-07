import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { auth, db } from "../firebase";

function Admin() {
  const [user, setUser] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) fetchTeams();
    });
    return () => unsub();
  }, []);

  const fetchTeams = async () => {
    const snapshot = await getDocs(collection(db, "teams"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setTeams(data);
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch {
      setError("Invalid credentials");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const addMember = async () => {
    if (!name || !role) return alert("Fill all fields");

    await addDoc(collection(db, "teams"), { name, role });

    setName("");
    setRole("");
    fetchTeams();
  };

  const deleteMember = async (id) => {
    await deleteDoc(doc(db, "teams", id));
    setTeams(teams.filter((t) => t.id !== id));
  };

  if (user) {
    return (
      <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
        <h2>Admin Dashboard</h2>

        <button onClick={logout}>Logout</button>

        <hr />

        <h3>Add Team Member</h3>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <br /><br />

        <button onClick={addMember}>Add Member</button>

        <hr />

        <h3>Team Members</h3>

        {teams.map((member) => (
          <div
            key={member.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              margin: "1rem 0",
              borderRadius: "8px"
            }}
          >
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            <button onClick={() => deleteMember(member.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={login}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Admin;