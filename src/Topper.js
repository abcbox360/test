import styled from "styled-components"
import logo from "./img/logo.png"

const Logo = styled.img`
width: 100%;
@media screen and (min-width: 1000px) {
    width: 400px;
}
`

function Topper () {
    return <Logo src={logo}/>
}

export default Topper