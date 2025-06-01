"use client";
import { useEffect, useState } from "react";
import { fetchUser } from "../utils/auth";
import { useRouter } from "next/navigation";

export default function PeoplePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchUser().then(u => {
      if (!u || !u.groups.includes("people")) router.push("/login");
      else setUser(u);
    });
  }, [router]);

  if (!user) return <div>Loading...</div>;
  return <h1>Welcome, People! This is the people page.</h1>;
}