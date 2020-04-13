import React from "react";

import Navbar from "../../components/Navbar";
import { Container } from "./styles";

export default function About() {
  return (
    <div>
      <Navbar />
      <Container>
        <h2>Ola, sou o Pedro</h2>
        <p>
          Eu sou desenvolvedor full-stack, atualmente cursando ciência da
          computação.
        </p>
      </Container>
    </div>
  );
}
