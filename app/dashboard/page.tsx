"use client";
import { useAuth } from "@/app/Components/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/app/services/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth).then(() => router.push("/login"));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Velkommen {user?.email}</p>
      <button onClick={handleLogout}>Log ud</button>
    </div>
  );
}
