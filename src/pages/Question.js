import React from 'react';
import { QuestionData } from '../assets/QuestionData';
import styled from 'styled-components';
import {createSearchParams, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { useAsync } from 'react-async';

const Question = () => {
    const navigate = useNavigate();

    const [questionNo, setQuestionNo] = React.useState(1);
    const [totalScore, setTotalScore] = React.useState(0);

    const handleClickButton = (answer) => {
        if(questionNo === 10)
        {
            if(QuestionData[questionNo - 1].correct === answer)
            {
                navigate("/result", { state: { score: totalScore + 10 } });
            }
            else
            {
                navigate("/result", { state: { score: totalScore } });
            }
        }
        else
        {
            if(QuestionData[questionNo - 1].correct === answer)
            {
                setTotalScore(totalScore + 10);
            }
        }
        setQuestionNo(questionNo + 1);
    }

    return (
        <Wrapper>
            <ProgressBar>
                <Highlight width={1000 * (questionNo - 1) / QuestionData.length} />
            </ProgressBar>
            <QuizNumber>{questionNo} / {QuestionData.length}</QuizNumber>
            <Title>{QuestionData[questionNo - 1].title}</Title>
            <Answers>
                <Button onClick={() => handleClickButton(1)}>
                    <AnswerText>{QuestionData[questionNo - 1].answera}</AnswerText>
                </Button>
                <Button onClick={() => handleClickButton(2)}>
                    <AnswerText>{QuestionData[questionNo - 1].answerb}</AnswerText>
                </Button>
                <Button onClick={() => handleClickButton(3)}>
                    <AnswerText>{QuestionData[questionNo - 1].answerc}</AnswerText>
                </Button>
                <Button onClick={() => handleClickButton(4)}>
                    <AnswerText>{QuestionData[questionNo - 1].answerd}</AnswerText>
                </Button>
            </Answers>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
    font-family: 'Jua', sans-serif;
    height: 100vh;
    width: 100%;
    background-color: #FFE6E6;
    
`

const ProgressBar = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: white;
    border: 5px solid black;
    
    transform: translate(0%, 50%);

    /* 나머지는 빅데스크탑 */
    width: 1000px;
    height: 50px;

    @media screen and (max-width:1799px) {
        width: 900px;
        height: 50px;
    }

    @media screen and (max-width:1199px) {
        width: 700px;
        height: 40px;
    }

    @media screen and (max-width:899px) {
        width: 500px;
        height: 30px;
    }

    @media screen and (max-width:599px) {
        width: 300px;
        height: 20px;
    }
`

const Highlight = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: blue;
    transition-duration: 0.5s;

    /* 나머지는 빅데스크탑 */
    width: ${(props) => props.width * 1}px;
    height: 50px;

    @media screen and (max-width:1799px) {
        width: ${(props) => props.width * 0.9}px;
        height: 50px;
    }

    @media screen and (max-width:1199px) {
        width: ${(props) => props.width * 0.7}px;
        height: 40px;
    }

    @media screen and (max-width:899px) {
        width: ${(props) => props.width * 0.5}px;
        height: 30px;
    }

    @media screen and (max-width:599px) {
        width: ${(props) => props.width * 0.3}px;
        height: 20px;
    }
`

const QuizNumber = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;

    /* 나머지는 빅데스크탑 */
    font-size: 30pt;
    margin-top: 60px;

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
        font-size: 25pt;
        margin-top: 50px;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
        font-size: 20pt;
        margin-top: 45px;
    }

    @media screen and (max-width:899px) {
        font-size: 16pt;
        margin-top: 40px;
    }

    @media screen and (max-width:599px) {
        font-size: 12pt;
        margin-top: 36px;
    }
`

const Title = styled.div`
    
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    /* 나머지는 빅데스크탑 */
    font-size: 24pt;
    
    @media screen and (max-width:1799px) {
    /* 데스크탑 */
        font-size: 21pt;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
        font-size: 18pt;
    }

    @media screen and (max-width:899px) {
    /* 모바일 가로, 타블렛 세로 */
        font-size: 15pt;
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
        font-size: 12pt;
    }
`

const Answers = styled.div`
    flex-direction: column
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    display: flex;
    font-size: 30pt;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    
    border: 5px solid black;
    border-radius: 25px;

    :hover {
        background-color: blue;
        transition-duration: 0.5s;
    }
 
    :not(:hover) {
        background-color: rgb(27, 0, 255, 0.5);
        transition-duration: 0.5s;
    }

    /* 나머지는 빅데스크탑 */
    margin: 50px auto;
    width: 400px;
    height: 100px;

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
    margin: 40px auto;
    width: 320px;
    height: 80px;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
    margin: 30px auto;
    width: 320px;
    height: 60px;
    }

    @media screen and (max-width:899px) and (min-height:600px) {
    /* 타블렛 세로 */
    margin: 40px auto;
    width: 320px;
    height: 80px;
    }
    
    @media screen and (max-width:899px) and (max-height:599px) {
    /* 모바일 가로 */
    margin: 10px auto;
    width: 300px;
    height: 30px;
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
    margin: 20px auto;
    width: 200px;
    height: 50px;
    }
`

const AnswerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* 나머지는 빅데스크탑 */
    font-size: 24pt;

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
    font-size: 21pt;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
    font-size: 18pt;
    }

    @media screen and (max-width:899px) {
    /* 모바일 가로, 타블렛 세로 */
    font-size: 15pt;
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
    font-size: 12pt;
    }
`

export default Question;