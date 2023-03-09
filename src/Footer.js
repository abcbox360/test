import styled from "styled-components"

const Container = styled.div`
background: rgba(0, 0, 0, 0.25);
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
font-size: 12px;
color: rgb(100, 100, 100);
@media screen and (min-width: 650px) {
    flex-direction: row;
}
`
const Info = styled.div`
margin: 10px 0;
width: 25%;
padding: 0 15px;
text-align: left;
&:nth-child(3) {
    text-align: center;
}
@media screen and (max-width: 650px) {
    width: auto;
    text-align: center;
    padding: 0 10px;
    &:nth-child(3),:nth-child(4) {
        display:none;
    }
}
`

function Footer() {
    return <Container>
        <Info>
        <p>財團法人外星語言研究發展協會 © 版權所有</p>
        <p>Copyright © 2023 Alien Languages Research and Development Foundation</p>
        <p>台北市中山區民權東路三段1號</p>
        <p>( 02 ) 1234 - 5678</p>
        </Info>
        <Info>
        <p>臺北OO大學 外星語中心 設計製作</p>
        <p>University of Taipei</p>
        <p>Digital Center of  Alien  Languages Production</p>
        <p>電子信箱：alienlang@gmail.com</p>
        <p>( 02 ) 1111 - 2222</p>
        </Info>
        <Info>
        <p>網站最佳瀏覽解析度</p>
        <p>1024 x 768 以上</p>
        <br></br>
        <p>推薦使用瀏覽器</p>
        <p>Chrome Safari</p>
        </Info>
        <Info>
        <p>網站地圖  網站授權說明</p>
        </Info>
    </Container>
}

export default Footer