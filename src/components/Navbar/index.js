import React, { memo } from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdHome } from "react-icons/md";

import { Container, List, Button } from "./styles";

function Navbar() {
  return (
    <Container>
      <List>
        <Button>
          <Link to="/">
            <MdHome size={15} />
            Home
          </Link>
        </Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
      </List>
      <List>
        <Button>
          <a href="https://www.linkedin.com/in/pedro-henrique-martins-da-silva-849959143">
            <AiFillLinkedin size={15} />
            Linkedin
          </a>
        </Button>
        <Button>
          <a href="https://github.com/Pedroh1510">
            <AiFillGithub size={15} />
            Github
          </a>
        </Button>
      </List>
    </Container>
  );
}

export default memo(Navbar);
