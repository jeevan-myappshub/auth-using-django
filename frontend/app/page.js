"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5rem" }}>
      <h1>Welcome to Auth System</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <button onClick={() => router.push("/register")} style={{ padding: "0.5rem 1.5rem" }}>
          Register
        </button>
        <button onClick={() => router.push("/login")} style={{ padding: "0.5rem 1.5rem" }}>
          Login
        </button>
      </div>
    </div>
  );
}