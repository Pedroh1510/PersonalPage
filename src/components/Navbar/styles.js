import styled from "styled-components";

export const Container = styled.div`
  background-color: "#000";
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0px;
  border: 1px solid black;
  border-radius: 5px;
  li {
    float: left;
    border-left: 1px solid #bbb;
    padding: 10px 0;
  }
`;

export const Button = styled.li`
  a {
    color: #283027;
    text-decoration: none;
    text-align: center;
    padding: 0px 5px;
  }
  svg {
    padding: 0 5px;
  }
  transition: 0.5s;
  &:hover {
    background-color: #b1aba8;
  }
`;
