"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/services/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      alert("Login-fejl: " + error.message);
    }
  };

  return (
    <div className="h-100 mt-8 w-8/12 m-auto border-2 border-solid flex flex-col space-x-1 p-2 justify-center items-center">
      <h1>Login</h1>

      <div className="p-4 space-y-2 border-2 border-solid flex flex-col">
        <input
          className="border-2 border-solid"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 border-solid"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-gray-700 p-2 text-white rounded-xl"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
