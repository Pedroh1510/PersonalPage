import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  margin: 0 auto;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    margin: 0.5rem 0;
  }

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 2rem;
  }
`
export const ListRepositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  div {
    width: 300px;
    margin: 10px auto;
  }
`
