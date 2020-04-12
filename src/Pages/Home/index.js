import React, { useState, useEffect, memo } from "react";
import { DiPython, DiJavascript1 } from "react-icons/di";

//import "./styles.css";
import {
  Container,
  SubTitle,
  ContainerRepositories,
  List,
  Url,
} from "./styles";

import Navbar from "../../components/Navbar";

function Home() {
  const [contentUser, setContentUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  async function getContentUser() {
    await fetch("https://api.github.com/users/pedroh1510")
      .then((response) => response.json())
      .then((data) => {
        setContentUser(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Limite excidido, tente novamente em 10 minutos");
      });
  }

  async function getRepositories() {
    await fetch("https://api.github.com/users/Pedroh1510/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(
          data.filter((repo) => {
            if (!repo.fork) {
              return true;
            }
            return false;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getContentUser();
    getRepositories();
  }, []);

  return (
    <div>
      <Navbar />
      <Container className="container-visual">
        <h1>Pedro Henrique</h1>
        <SubTitle className="n-repositories">
          Numero de repositorios no Github: {contentUser["public_repos"]}
        </SubTitle>
        <ContainerRepositories className="visual-repositories">
          <List>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <h3 className="title">{repo.name}</h3>

                <h3>
                  Linguagem:{repo.language}
                  {repo.language === "JavaScript" ? (
                    <DiJavascript1 size={20} color="#F0f850" />
                  ) : repo.language === "Python" ? (
                    <DiPython size={20} color="#F0f850" />
                  ) : null}
                </h3>

                {repo.description !== null ? (
                  <h2>Descrição: {repo.description}</h2>
                ) : null}

                {repo.homepage !== null ? (
                  repo.homepage !== "" ? (
                    <h3>
                      site: <Url href={repo.homepage}>Acessar</Url>
                    </h3>
                  ) : null
                ) : null}
              </li>
            ))}
          </List>
        </ContainerRepositories>
      </Container>
    </div>
  );
}

export default memo(Home);
