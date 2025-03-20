import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="px-10">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-4xl">Gymnastic Instructor planning tool</h1>
        <Link
          className="bg-gray-800 text-white p-2 rounded-md"
          href="Pages/CreateEvent"
        >
          Add New Event
        </Link>
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
