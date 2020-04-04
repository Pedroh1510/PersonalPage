import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdHome } from "react-icons/md";

import "./styles.css";

export default function Navbar() {
  return (
    <div className="visual-header">
      <ul>
        <li>
          <Link to="/">
            <MdHome size={15} />
            Home
          </Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pedro-henrique-martins-da-silva-849959143">
            <AiFillLinkedin size={15} />
            About
          </a>
        </li>
        <li>
          <a href="https://github.com/Pedroh1510">
            <AiFillGithub size={15} />
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
