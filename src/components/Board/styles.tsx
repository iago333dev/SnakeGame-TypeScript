import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #3d3d3b;

`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Linha = styled.div`
  display: flex;
`
interface QuadradoProps {
  state: string
}
export const Quadrado = styled.div<QuadradoProps>`
  background-color: #dadada;
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
