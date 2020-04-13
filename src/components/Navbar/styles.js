import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  margin: 30px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0px;
  overflow: hidden;
  li {
    float: left;
    border-left: 1px solid #bbb;
    padding: 10px 0;
  }
`;

export const Button = styled.li`
  a {
    height: 55px;
    min-width: 30px;
    color: #283027;
    text-decoration: none;
    text-align: center;
    padding: 0px 5px;
  }
  svg {
    padding: 0 px;
  }
  transition: 0.5s;
  &:hover {
    background-color: #b1aba8;
  }
`;
