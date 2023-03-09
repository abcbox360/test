import Header from "./Header"
import styled from "styled-components"
import {Link } from "react-router-dom";
import Footer from "./Footer"

const MainContainer = styled.div`
width: 100%;
`
const TeachButton = styled.div`
text-align: center;
font-size: 3em;
line-height: 100px;
color: white;
font-weight: bold;
background-color: #0eb3e0;
`

const DifficultyButton = styled(Link)`
width: 250px;
height: 66px;
background: #fccf00;
border-radius: 5px;
font-size: 2.6em;
display: flex;
justify-content: center;
margin: 10px auto;
cursor: pointer;
text-decoration: none;
color: black;
&:hover {
    background: #c9a500 ;
}
`


function Main () {

    return <MainContainer>
      <Header />
        <TeachButton>教學模組2.0</TeachButton>
        <DifficultyButton>初級</DifficultyButton>
        <DifficultyButton to="/medium">中級</DifficultyButton>
        <DifficultyButton>中高級</DifficultyButton>
        <Footer />
    </MainContainer>
}

export default Main


