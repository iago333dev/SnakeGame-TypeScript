import styled, { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  body: {
    margin: auto;

  }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #dadada;
`

export const Score = styled.div`
  margin: auto;
  text-align: center;
  color: #a2a9af;
  font-size: 50px;
  text-shadow: 0 -40px 100px, 0 0 2px #000, 0 0 1em #5cf2e8, 0 0 0.5em #5cf2e8, 0 0 0.1em #5cf2e8, 0 10px 3px #FFF
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Linha = styled.div`
  display: flex;
  flex-direction: row;
`
interface QuadradoProps {
  state: string
}

export const Quadrado = styled.div<QuadradoProps>`
  background-color: #3d3d3b;
  width: 20px;
  height: 20px;
  border: 1px solid #a2a9af ; 
  ${props => props.state === 'SNAKE' && `background-color: #4c5870;`}   
  ${props => props.state === 'FOOD' && `background-color: #5cf2e8;`}
`

/* // 
  ${props => props.state ? `NOT_SNAKE` : `background-color: green;`}
  ${props => props.state && 'background-color: green;'};
*/


export const Body = styled.div`
background-color: black;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`
