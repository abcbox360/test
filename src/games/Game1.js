import styled, { keyframes } from "styled-components"
import { text } from "./text"
import { sound } from "./sound"
import backImage1 from "../img/2.jpg"
import { image } from "../img/image"
import { useState, useEffect } from "react"
import { AiOutlineSound, AiOutlinePause } from "react-icons/ai";

const Container = styled.div`
position: relative;
width: 100%;
margin-bottom: 200px;
`
const ImageContainer = styled.div`
position: relative;
width: 100%;
`
const Questions = styled.div`
position: absolute;
width: calc(100% - 160px);
border-radius: 20px;
left: 80px;
margin: -30px 0;
padding: 8px;
text-align: center;
background: rgba(0, 0, 256, 0.1);
font-size: 24px;
@media screen and (max-width: 650px) {
    width: 100%;
    margin:0;
    left: 0;
    font-size: 20px;
    position: relative;
}
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
const trans = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(0.8)}
    100% {transform: scale(1)}
`
const shake = keyframes`
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
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
const WordContainer = styled.div`
position: relative;
background: rgba(256, 256, 256, 0.8);
width: 80%;
left: 10%;
border-radius: 20px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 650px) {
    width: 100%;
    left: 0;
}
`
const WordText = styled.div`
height: 50px;
width: 80%;
border-bottom: 1px solid black;
display: flex;
justify-content: center;
@media screen and (max-width: 650px) {
    width: 90%;
}
`
const Ask = styled.div`
font-size:24px;
padding-top: 7px;
`
const Words = styled.div`
display: flex;
width: 80%;
justify-content: start;
flex-wrap: wrap;
@media screen and (max-width: 650px) {
    width: 90%;
    left: 5%;
}
`
const Word = styled.div`
border: 1px solid black;
font-size: 24px;
height: 1.5em;
margin: 5px;
padding: 0 5px;
background: rgb(256, 256, 256);
cursor: pointer;
border-radius: 5px;
white-space: nowrap;
&:hover {
    background: rgb(200, 200, 200);
    box-shadow: 0 0 2px black;
}
animation: ${props => props.$shake && shake} 0.1s linear infinite;
`

const AskButton = styled.button`
font-size: 16pt;
width: 80px;
margin: 10px;
background-color: #A7B1DD;
padding: 2px 10px;
border-radius: 3px;
border: none;
left: calc(50% - 50px);
bottom: 2%;
cursor: pointer;
box-shadow: 1px 1px 2px #000;
&:hover {
    box-shadow: 1px 1px  5px #000;
}
&:active {
    box-shadow: none;
    filter: brightness(0.9);
}
`

const AnswerContainer = styled.div`
position: absolute;
width: 50%;
left: 25%;
top: 40%;
border-radius: 20px;
background: rgba(256, 256, 256, 0.8);
text-align: center;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
@media screen and (max-width: 650px) {
    position: relative;
    border: 1px solid black;
    width: 100%;
    left: 0;
    margin-bottom: 5px;
}
`
const Answer = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-wrap: wrap;
`
const SoundPlay = styled.div`
font-size: 40px;
background: rgb(256, 256, 256);
width: 45px;
height: 45px;
margin: auto;
border-radius: 50%;
border: 1px solid black;
padding: 2px;
cursor: pointer;
margin: 10px; 
&:hover {
    box-shadow: 0 0 5px #000;
}
& * {
    pointer-events:none;
}
${props => props.playing && `
box-shadow: 0 0 5px #000;
background: rgb(200, 200, 200);
`}
`
const LeftName = styled.div`
position: absolute;
font-size: 1.7vw;
left: 24%;
bottom: 10%;
font-weight: 600;
@media screen and (min-width: 1000px){
    font-size: 18px;
}
`
const RightName = styled(LeftName)`
left: auto;
right: 6.5%;
`
const Complete = styled(AnswerContainer)`
font-size: 24px;
`
const CompleteButton = styled(AskButton)`
font-size: 24px;
position: static;
width: 150px;
margin: 5px;
`
const AskSound = styled(SoundPlay)`
`

function Game1(props) {
    const [step, setStep] = useState(0)
    const [askStep, setAskStep] = useState(0)
    const [wordText, setWordText] = useState([])
    const [words, setWords] = useState(text.stage1.word)
    const [soundPlay, setSoundPlay] = useState(0)
    const [complete, setComplete] = useState(0)
    const [shakeAnima, setShakeAnima] = useState(0)
    const { setStage } = props
    let names = text.stage1.name
    const handleClickSelect = (e) => {
        const id = Number(e.target.id)
        if (step === id) {
        } else if (id === 1 && complete != 1) {
            setStep(1)
            setWordText([])
            setAskStep(0)
            setWords(text.stage1.word)
        } else if (id === 2 && complete != 2) {
            setStep(2)
            setWordText([])
            setAskStep(0)
            setWords(text.stage1.word)
        }
    }
    const handleClickNew = (e) => {
        let w = wordText
        let w2 = words
        if (w.indexOf(e.target.id) === -1) {
            w.push(e.target.id)
            w2 = w2.filter(x => !(x == e.target.id))
            setWordText(w)
            setWords(w2)
        } else {
            w2.push(e.target.id)
            w = w.filter(x => !(x == e.target.id))
            setWordText(w)
            setWords(w2)
        }
    }
    const handleClickAsk = () => {
        let w = wordText.join('')
        if (w === text.stage1.ask) {
            setAskStep(step)
            setSoundPlay(step)
            document.getElementById("s" + step).play()
            document.getElementById("s" + step).addEventListener("ended", () => { setSoundPlay(0) })
        } else {
            setAskStep(3)
            setSoundPlay(3)
            document.getElementById("s3").play()
            document.getElementById("s3").addEventListener("ended", () => { setSoundPlay(0) })
        }
    }
    const handleClickSound = (e) => {
        const sound = Number(e.target.id)
        if (soundPlay === 0) {
            if (askStep > 0 && sound != 4) {
                setSoundPlay(sound)
                document.getElementById("s" + sound).play()
                document.getElementById("s" + sound).addEventListener("ended", () => { setSoundPlay(0) })
            } else {
                setSoundPlay(sound)
                document.getElementById("s0").play()
                document.getElementById("s0").addEventListener("ended", () => { setSoundPlay(0) })
            }
        } else if (soundPlay > 0 && soundPlay < 4) {
            document.getElementById("s" + soundPlay).pause()
            document.getElementById("s" + soundPlay).currentTime = 0
            if (sound > 0 && sound < 4) {
                setSoundPlay(0)
            } else {
                setSoundPlay(sound)
                document.getElementById("s0").play()
                document.getElementById("s0").addEventListener("ended", () => { setSoundPlay(0) })
            }
        } else {
            document.getElementById("s0").pause()
            document.getElementById("s0").currentTime = 0
            if (sound > 0 && sound < 4) {
                setSoundPlay(sound)
                document.getElementById("s" + sound).play()
                document.getElementById("s" + sound).addEventListener("ended", () => { setSoundPlay(0) })
            } else {
                setSoundPlay(0)
            }

        }
    }
    const handleClickSelectName = (e) => {
        if (e.target.id === text.stage1.answer[step - 1]) {
            if (complete > 0) {
                setComplete(3)
                setAskStep(0)
                setStep(0)
            } else if (step === 1) {
                setStep(2)
                setComplete(step)
            } else {
                setStep(1)
                setComplete(step)
            }
            setWordText([])
            setWords(text.stage1.word)
            setAskStep(0)
        } else {
            setShakeAnima(e.target.id)
            setTimeout(() => setShakeAnima(0), 100)
        }
    }
    const reStart = () => {
        setStep(0)
        setComplete(0)
        setAskStep(0)
        setWordText([])
        setWords(text.stage1.word)
    }
    return (
        <Container>
            {sound.stage1.map((s, i) => <audio src={s} key={"s" + i} id={"s" + i}></audio>)}
            <Questions>
                {text.stage1.question.map((q, i) => <div key={"q" + i}>{q}</div>)}
            </Questions>
            <ImageContainer>
            <BackImage src={backImage1} />
            <LeftImage src={step === 1 ? image.leftStudent[1] : image.leftStudent[0]} />
            <PlayerImage src={step === 2 ? image.player[1] : image.player[0]} />
            <RightImage src={step === 2 ? image.rightStudent[1] : image.rightStudent[0]} />
            <LeftButton onClick={handleClickSelect} id={1} $active={step === 1} $complete={complete === 1 || complete === 3} />
            <RightButton onClick={handleClickSelect} id={2} $active={step === 2} $complete={complete === 2 || complete === 3} />
            {/* 選對其中一人姓名 */}
            {(complete === 1 || complete === 3) && <LeftName>{text.stage1.answer[0]}</LeftName>}
            {(complete === 2 || complete === 3) && <RightName>{text.stage1.answer[1]}</RightName>}
            </ImageContainer>
            {/* 發問錯誤重播聲音 */}
            {askStep === 3 && <AnswerContainer>
                <SoundPlay onClick={handleClickSound} id={askStep} playing={soundPlay > 0}>{soundPlay > 0 ? <AiOutlinePause /> : <AiOutlineSound />}</SoundPlay>
            </AnswerContainer>
            }
            {/* 選字 */}
            {(askStep === 0 || askStep === 3) && step > 0 && <WordContainer>
                <WordText>
                    {wordText.map((w) => <Word onClick={handleClickNew} id={w} key={w}>{w}</Word>)}
                </WordText>
                <Words>
                    {words.map((w) => <Word onClick={handleClickNew} id={w} key={w}>{w}</Word>)}
                </Words>
                <AskButton onClick={handleClickAsk}>提問</AskButton>
            </WordContainer>
            }
            {/* 發問正確選姓名 */}
            {askStep > 0 && askStep < 3 && <AnswerContainer>
                <Answer>
                    {names.map((n) => <Word onClick={handleClickSelectName} $shake={shakeAnima === n} id={n} key={n}>{n}</Word>)}
                </Answer>
                <SoundPlay onClick={handleClickSound} id={askStep} playing={soundPlay > 0 && soundPlay < 4}>{soundPlay > 0 && soundPlay < 4 ? <AiOutlinePause /> : <AiOutlineSound />}</SoundPlay>
            </AnswerContainer>
            }
            {/* 發問正確 */}
            {step > 0 && askStep > 0 && askStep < 3 && <WordContainer>
                <WordText>
                    <Ask>{wordText.map((w) => w)}?</Ask>
                </WordText>
                <AskSound onClick={handleClickSound} id="4" playing={soundPlay === 4}>{soundPlay === 4 ? <AiOutlinePause /> : <AiOutlineSound />}</AskSound>
            </WordContainer>
            }
            {/* 選對兩人姓名 */}
            {complete === 3 && <Complete>
                <div>任務完成!</div>
                <div>
                    <CompleteButton onClick={reStart}>再玩一次</CompleteButton>
                    <CompleteButton onClick={() => setStage(2)}>繼續下一題</CompleteButton>
                </div>
            </Complete>}
        </Container>
    )
}




export default Game1