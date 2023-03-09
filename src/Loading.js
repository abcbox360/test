import styled, { keyframes } from "styled-components"
const load = keyframes`
    0% {
      transform: rotate(0);
    } 
    100% {
      transform: rotate(360deg);
    }
  `
const Container = styled.div`
background: white;
width: 100%;
height: 100%;
position: absolute;
z-index: 2;
&:after {
    content: "";
    background: white;
    border-radius: 50%;
    position: fixed;
    width: 44px;
    height: 44px;
    top: calc(50% + 3px);
    left: calc(50% - 22px);
}
&:before {
    content: "";
    background: linear-gradient( #D2E9FF, #D2E9FF, #2894FF, #004B97);
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 50%;
    left: calc(50% - 25px);
    animation : ${load} 1s linear infinite;
}
`

function Loading() {

    return <Container />
}

export default Loading
