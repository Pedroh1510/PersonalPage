import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  color: #ccc5c1;
  margin: 0 24px;
`;

export const SubTitle = styled.h3`
  text-align: center;
`;

export const ContainerRepositories = styled.div`
  max-width: 750px;
  margin: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    color: #283027;
    background-color: #a6a8a3;
    width: 300px;
    float: left;
    overflow: hidden;
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const Url = styled.a`
  text-decoration: none;
  color: #d6837a;
  transition: 0.3s;
  &:hover {
    color: ${shade(0.15, "#D6837A")};
  }
`;
