import styled from "styled-components"
import Opening from "./games/Opening"
import Stage1 from "./games/Game"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { image } from "./img/image"
import Loading from "./Loading";

const Container = styled.div`
width: 100%;
`
const TeachHead = styled.div`
text-align: center;
font-size: 3em;
line-height: 100px;
font-weight: bold;
color: white;
background-color: #0eb3e0;
`

const Level = styled.div`
text-align: center;
color: white;
font-size: 20pt;
font-weight: bolder;
    border-radius: 10px;
    margin: 10px 0;
    padding: 5px 0;
    line-height: normal;
    background-color: #E8993D
`
const ReturnButton = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
font-size: 16pt;
margin-top: 10px;
background-color: #fdd001;
width: 80px;
height: 33px;
padding: 2px 10px;
border-radius: 3px;
border: none;
cursor: pointer;
text-decoration: none;
color: black;
&:hover {
    background: #c9a500 ;
}
@media screen and (max-width: 650px) {
    margin-left: 10px;
}
`
function Medium() {
    const [stage, setStage] = useState(0)
    const [loading, setLoading] = useState(true)
    //預加載圖片&loading判斷
    useEffect(() => {
        for (const key in image) {
            if (Array.isArray(image[key])) {
                image[key].map((img, i) => {
                    if (key === 'back' && i === 1) {
                        const x = new Image()
                        x.onload = () => {
                            setLoading(false)
                        }
                        x.src = img
                    } else {
                        new Image().src = img
                    }
                });
            } else {
                new Image().src = image[key]
            }
        }
    }, [])
    //loading

    return <Container>
        <TeachHead>中級教學模組</TeachHead>
        <Level>中級</Level>
        <ReturnButton to="/">返回</ReturnButton>
        {loading && <Loading />}
        {stage === 0 && <Opening stage={stage} setStage={setStage} />}
        {stage > 0 && <Stage1 stage={stage} setStage={setStage} />}
    </Container>
}

export default Medium