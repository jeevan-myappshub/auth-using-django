"use client";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true }).then(() => {
      router.push("/login");
    });
  }, [router]);

  return <div>Logging out...</div>;
}