"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { USE_MOCK_DATA } from "../config";

const Header = () => {
  const [user, setUser] = useState(auth.currentUser);
  const router = useRouter();

  // Detect auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log("Auth changed:", user ? "Logget ind" : "Ikke logget ind");
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => router.push("/login"));
  };

  return (
    <header className="px-10">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-4xl">
          Gymnastic Instructor Planning Tool
          {USE_MOCK_DATA ? " (Mock Data)" : "(Api Data)"}
        </h1>

        <div className="flex flex-row space-x-2 justify-between items-center">
          {auth.currentUser ? (
            <Link href="" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
          <Link
            className="bg-gray-800 text-white p-2 rounded-md"
            href="Pages/CreateEvent"
          >
            Add New Event
          </Link>
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <Image
          width={40}
          height={40}
          alt=""
          src="https://via.placeholder.com/40"
        ></Image>
        <Image
          width={40}
          height={40}
          alt=""
          src="https://via.placeholder.com/40"
        ></Image>
        <Image
          width={40}
          height={40}
          alt=""
          src="https://via.placeholder.com/40"
        ></Image>
        <Image
          width={40}
          height={40}
          alt=""
          src="https://via.placeholder.com/40"
        ></Image>
        <p>Nora, Eliza, bob and 12 others...</p>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
