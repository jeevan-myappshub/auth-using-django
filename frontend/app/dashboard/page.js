"use client";
import { useEffect, useState } from "react";
import { fetchUser } from "../utils/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchUser().then(u => {
      if (!u) router.push("/login");
      else setUser(u);
    });
  }, [router]);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <a href="/logout">Logout</a>
    </div>
  );
}