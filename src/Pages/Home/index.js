import React, { useState, useEffect } from "react";
import { DiPython, DiJavascript1 } from "react-icons/di";

import "./styles.css";

export default function Home() {
  const [contentUser, setContentUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  async function getContentUser() {
    await fetch("https://api.github.com/users/pedroh1510")
      .then(response => response.json())
      .then(data => {
        setContentUser(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async function getRepositories() {
    await fetch("https://api.github.com/users/Pedroh1510/repos")
      .then(response => response.json())
      .then(data => {
        setRepositories(
          data.filter(repo => {
            if (!repo.fork) {
              return true;
            }
            return false;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getContentUser();
    getRepositories();
  }, []);

  function setIcon(icon) {
    if (icon === "JavaScript") {
      return <DiJavascript1 size={16} color="#F0f850" />;
    }
    if (icon === "Python") {
      return <DiPython size={16} color="#F0f850" />;
    }
    return null;
  }

  return (
    <div className="container-visual">
      <h1>{contentUser.name}</h1>
      <div className="visual-header">
        <h3>Bio: nice guy </h3>
        <h3>Numero de repositorios: {contentUser["public_repos"]}</h3>
      </div>
      <div className="visual-repositories">
        <ul>
          {repositories.map(repo => (
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
              {/* {() => setIcon(repo.language)} */}
              <h2>Descrição: {repo.description}</h2>
              {repo.homepage !== null ? (
                repo.homepage !== "" ? (
                  <h3>
                    site: <a href={repo.homepage}>link</a>
                  </h3>
                ) : null
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
