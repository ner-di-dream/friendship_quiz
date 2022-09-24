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
    width: 1000px;
    height: 50px;
    transform: translate(0%, 50%);
`

const Highlight = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: blue;
    width: ${(props) => props.width}px;
    height: 50px;
    transition-duration: 0.5s;
`

const QuizNumber = styled.div`
    font-size: 30pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const Title = styled.div`
    font-size: 30pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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
    margin: 50px auto;
    width: 400px;
    height: 100px;
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
`

const AnswerText = styled.div`
    font-size: 24pt;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Question;