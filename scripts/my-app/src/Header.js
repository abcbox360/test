import styled from 'styled-components'
import { Button } from 'react-bootstrap';
import { useState } from 'react'

const HeaderContainer = styled.div`
display: flex;
position: fixed;
background: #D0D0D0;
top: 0;
width: 100%;
height: 3rem;
`

const Link = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 6rem;
cursor: pointer;
transition: background 0.1s , color 0.1s;

${props => props.$active && `
background: rgba(0,0,0,0.5);
color: white;
`}
`

function Header () {
    const [page, setPage] = useState('homePage')

    const handleClick = (props) => {
        setPage(props.target.id)
    }

return (
    <HeaderContainer>
        <Link onClick={handleClick} id="homePage" $active={page === "homePage"}>記帳</Link>
        <Link onClick={handleClick} id="serchPage" $active={page === "serchPage"}>查詢</Link>
        <Link onClick={handleClick} id="analyzePage" $active={page === "analyzePage"}>花費分析</Link>
    </HeaderContainer>
)

}

export default Header