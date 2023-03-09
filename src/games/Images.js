import styled, { keyframes } from "styled-components"
import { image } from "../img/image"
import { text } from "./text"

  const shake2 = keyframes`
  2.5%, 22.5% {
    transform: translate3d(-1px, 0, 0);
  }
  5%, 20% {
    transform: translate3d(2px, 0, 0);
  }
  7.5%, 12.5%, 17.5% {
    transform: translate3d(-3px, 0, 0);
  }
  10%, 15% {
    transform: translate3d(3px, 0, 0);
  }
`
const ImageContainer = styled.div`
position: relative;
width: 100%;
`
const BackImage = styled.img`
position: relative;
z-index: -1;
width: 100%;
`
const LeftImage = styled.img`
width: 100%;
position: absolute;
left:0;
`
const PlayerImage = styled.img`
width: 100%;
position: absolute;
left:0;
`
const RightImage = styled.img`
width: 100%;
position: absolute;
left:0;
`
const PenImage = styled.img`
position: absolute;
width: 6%;
left: 24%;
bottom: 13%;
transition: left 1s, bottom 1s;
animation: ${props => props.$active && shake2} 4s linear infinite;
${props => props.$complete && `
left: 36%;
bottom: 10%;
`}
`
const EraserImage = styled.img`
position: absolute;
width: 4%;
left: 88%;
bottom: 13%;
transition: left 1s, bottom 1s;
animation: ${props => props.$active && shake2} 4s linear infinite;
${props => props.$complete && `
left: 56%;
bottom: 14%;
`}
`
const BroomImage = styled.img`
position: absolute;
width: 15%;
left: -4%;
bottom: 9%;
transition: left 1s, bottom 1s;
animation: ${props => props.$active && shake2} 4s linear infinite;
${props => props.$complete && `
left: 25%;
bottom: 10%;
`}
`
const trans = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(0.8)}
    100% {transform: scale(1)}
`
const LeftButton = styled.div`
position: absolute;
max-width: 210px;
max-height: 210px;
top: 45%;
left: 6.5%;
width: 20vw;
height: 20vw;
border: 5px dashed rgba(0, 0, 0, 0.5);
cursor: pointer;
animation: ${props => props.$active && trans} 3s linear infinite;
${props => props.$active && `
border-radius: 50%;
cursor: auto;
border: 5px dashed rgba(256, 0, 0, 0.5);
`}
${props => props.$complete && `
cursor: auto;
border: none;
`}
`
const RightButton = styled(LeftButton)`
right: 8%;
left: auto;
`
const LeftName = styled.div`
position: absolute;
font-size: 1.7vw;
left: 24%;
bottom: 10%;
font-weight: 600;
color: transparent;
transition: color 2s linear;
@media screen and (min-width: 1000px){
    font-size: 18px;
}
${props => props.$complete && `
color: black;
`}
`
const RightName = styled(LeftName)`
left: auto;
right: 6.5%;
@media screen and (max-width: 650px){
    right: 5%;
}
`
const LeftAddress = styled(LeftName)`
left: 17%;
@media screen and (max-width: 650px){
    left: 16%;
}
${props => props.$complete && `
color: rgb(0, 0, 256);
`}
`
const RightAddres = styled(LeftName)`
left: auto;
right: 15%;
${props => props.$complete && `
color: rgb(0, 0, 256);
`}
`
function Images (props) {
const {stage, step, complete, setStep, setWordText, setAskStep, setWords} = props

const handleClickSelect = (e) => {
    const id = Number(e.target.id)
    if (complete !== 3){
        if (step === id) {
        } else if (id === 1 && complete !== 1) {
            setStep(1)
            setWordText([])
            setAskStep(0)
            setWords(text[stage].word)
        } else if (id === 2 && complete !== 2) {
            setStep(2)
            setWordText([])
            setAskStep(0)
            setWords(text[stage].word)
        }
    }
}
return <ImageContainer>
            <BackImage src={image.back[3]} />
            <BroomImage src={image.broom} $active={stage === 5 && complete !== 3} $complete={(stage === 5 && complete === 3) || stage > 5}/>
            <LeftImage src={step === 1 ? image.leftStudent[1] : image.leftStudent[0]} />
            <PlayerImage src={step === 2 ? image.player[1] : image.player[0]} />
            <RightImage src={step === 2 ? image.rightStudent[1] : image.rightStudent[0]} />
            <LeftButton onClick={handleClickSelect} id={1} $active={step === 1} $complete={complete === 1 || complete === 3} />
            <RightButton onClick={handleClickSelect} id={2} $active={step === 2} $complete={complete === 2 || complete === 3} />
            <PenImage src={image.pen} $active={stage === 3 && complete !== 3} $complete={(stage === 3 && complete === 3) || stage > 3}/>
            <EraserImage src={image.eraser} $active={stage === 4 && complete !== 3} $complete={(stage === 4 && complete === 3) || stage > 4}/>
            {/* 名牌 */}
            <LeftName $complete={complete === 1 || complete === 3 || stage > 1}>{text[1].answer[0]}</LeftName>
            <RightName $complete={complete === 2 || complete === 3 || stage > 1}>{text[1].answer[1]}</RightName>
            {/* 居住地 */}
            <LeftAddress $complete={((complete === 1 || complete === 3) && stage > 1) || stage > 2}>{text[2].answer[0]}</LeftAddress>
            <RightAddres $complete={((complete === 2 || complete === 3) && stage > 1) || stage > 2}>{text[2].answer[1]}</RightAddres>
</ImageContainer>
}

export default Images