import React, { memo } from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdHome } from "react-icons/md";

import { List, Button } from "./styles";

function Navbar() {
  return (
    <div className="visual-header">
      <List>
        <Button>
          <Link to="/">
            <MdHome size={15} />
            Home
          </Link>
        </Button>
        <Button>
          <a href="https://www.linkedin.com/in/pedro-henrique-martins-da-silva-849959143">
            <AiFillLinkedin size={15} />
            About
          </a>
        </Button>
        <Button>
          <a href="https://github.com/Pedroh1510">
            <AiFillGithub size={15} />
            Github
          </a>
        </Button>
      </List>
    </div>
  );
}

export default memo(Navbar);
