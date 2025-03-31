"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NavItem } from "../types";

const InitialNavLinks: NavItem[] = [
  {
    id: 1,
    text: "Weekly plan",
    href: "/",
  },
  {
    id: 2,
    text: "Events",
    href: "/events",
  },
  {
    id: 3,
    text: "Shows",
    href: "/shows",
  },
];

const Nav: React.FC = () => {
  const [navLink, setNavLinks] = useState(InitialNavLinks);
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <ul className="flex space-x-10 mt-4 w-full p-2 border-b-1">
        {navLink.map((item) => (
          <li key={item.id}>
            <Link
              className={`px-4 py-2 ${
                selectedId === item.id
                  ? "text-blue-500 font-bold border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
              onClick={() => setSelectedId(item.id)}
              href={item.href}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
