"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register", {
        name, email, password,
      });
      router.push("/login");
    } catch (err) {
      alert("Registration failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "2rem auto" }}>
      <h2>Register</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
}