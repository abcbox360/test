import styled from "styled-components"
import Topper from "./Topper"
import Main from "./Main"
import Easy from "./Easy"
import Medium from "./Medium"
import Hard from "./Hard"
import {HashRouter, Route, Routes } from "react-router-dom";

const Container = styled.div`
width: 100%;
max-width: 1000px;
margin: 0 auto;
`

function App() {
  return (
    <Container>
      <Topper />
      <HashRouter>
        <Routes>
      <Route path="*" element={<Main />}/>
      <Route path="/medium" element={<Medium />} />
      </Routes>
        </HashRouter>      
   {/* <Easy /> 
  <Hard />  */}
    </Container>
  )
}

export default App;
