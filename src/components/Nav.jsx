import React from "react";
import { navData } from "../data";
const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="h-full p-4 flex flex-col justify-center items-center gap-y-6">
        {navData.map((item, index) => {
          return (
            <li
              className="text-xl font-primary italic hover:text-dark transition-all duration-300 capitalize"
              key={index}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
