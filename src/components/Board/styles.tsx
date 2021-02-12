import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  height: 100vh;
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
  background-color: blue;
  width: 20px;
  height: 20px;
  border: 1px solid red; 

`

/* // 
${props => props.state ? `NOT_SNAKE` && `background-color: green;`}
  ${props => props.state && 'background-color: green;'};
*/
