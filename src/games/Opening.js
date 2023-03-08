import styled, { keyframes } from "styled-components"
import { image } from "../img/image"
import { text } from "./text"
import { sound } from "./sound"
import { useState, useEffect } from "react"
import { BsChevronRight } from "react-icons/bs";

const Container = styled.div`
position: relative;
width: 100%;
margin-bottom: 200px;
@media screen and (max-width: 650px) {
    height: 600px;
}
`
const BackImage = styled.img`
width: 100%;
position: relative;
z-index: -1;
`

const Step0Text = styled.div`
position: absolute;
top:50%;
background: rgba(256, 256, 256, 0.5);
border-radius: 10px;
width: 90%;
text-align: center;
padding: 20px;
left: 5%;
font-size: 24pt;
@media screen and (max-width: 650px) {
    position: static;
    font-size: 20pt;
    width: 100%;
}
`
const StartButton = styled.div`
font-size: 16pt;
width: 80px;
margin: 10px auto;
background-color: #A7B1DD;
padding: 2px 10px;
border-radius: 3px;
border: none;
box-shadow: 2px 2px 3px #000;
cursor: pointer;
&:hover {
    box-shadow: 2px 2px 5px #000;
}
&:active {
    box-shadow: 2px 2px 10px #000;
    filter: brightness(0.9);
}
`

const StepText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
bottom: 5%;
background: rgba(256, 256, 256, 0.5);
border-radius: 10px;
width: 90%;
text-align: center;
padding: 20px;
left: 5%;
font-size: 24pt;
@media screen and (max-width: 650px) {
    position: relative;
    font-size: 20pt;
    width: 100%;
    left: 0;
    bottom: 0;
    padding-top: 50px;
}
`
const Text = styled.div`
text-align: left;
width: 60%;
@media screen and (max-width: 650px) {
    width: 100%;
}
`
const StepButton = styled(StartButton)`
position: absolute;
width: 50px;
height: 50px;
margin: 0;
right: 10px;
bottom: 10px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 650px) {
    position: static;
    margin: 10px 0;
}
`
const ReplayButton = styled(StartButton)`
position: absolute;
right: 10px;
top: 10px;
margin: 10px 0;
width: auto;
@media screen and (max-width: 650px) {
    position: static;
}
`
const NextButton = styled(ReplayButton)`
bottom: 10px;
top: auto;
`
const shake = keyframes`
    0% {transform: rotate(0)}
    50% {transform: rotate(10deg)}
    100% {transform: rotate(0)}
`
const HeadImage = styled.img`
position: absolute;
left: 2%;
bottom: 10%;
width: 100px;
animation: ${shake} 2s linear infinite ;
@media screen and (max-width: 650px) {
    width: 50px;
    top: 0;
}
`


function Opening(props) {
    const [step, setStep] = useState(0)
    const [backImage, setBackImage] = useState(image.back[0])
    const { setStage, stage } = props
    const handleClickStep = () => {
        document.getElementById("s" + step).pause()
        document.getElementById("s" + step).currentTime = 0
        setStep(step + 1)
        if (step % 2 === 0) {
            setBackImage(image.back[1])
        } else {
            setBackImage(image.back[2])
        }
    }
    const handleClickReplay = () => {
        document.getElementById("s" + step).pause()
        document.getElementById("s" + step).currentTime = 0
        setStep(0)
        setBackImage(image.back[0])
    }
    useEffect(() => {
        document.getElementById("s" + step).play()
    }, [step])
    return <Container>
        <BackImage src={backImage} />
        {sound[stage].map((s, i) => <audio src={s} key={"s" + i} id={"s" + i}></audio>)}
        {step === 0 && <Step0Text>
            {text[stage][0].map((t) => <div key={t}>{t}</div>)}
            <StartButton onClick={handleClickStep}>開始</StartButton>
        </Step0Text>}
        {step > 0 && step < 4 &&
            <StepText>
                <HeadImage src={image.head[step % 2]}/>
                {text[stage][step].map((t) => <Text key={t}>{t}</Text>)}
                <StepButton onClick={handleClickStep}><BsChevronRight /></StepButton>
            </StepText>
        }
        {step > 3 &&
            <StepText>
                <HeadImage src={image.head[step % 2]}/>
                {text[stage][step].map((t) => <Text key={t}>{t}</Text>)}
                <ReplayButton onClick={handleClickReplay}>再看一次</ReplayButton>
                <NextButton onClick={() => setStage(1)}>下一階段</NextButton>
            </StepText>
        }
    </Container>
}

export default Opening