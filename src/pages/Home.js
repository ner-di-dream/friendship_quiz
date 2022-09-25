import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

const Home = () => {
    const navigate = useNavigate();
    
    const handleClickButton = () => {
        // useHistory
        navigate('/question');
    }

    return (
        <Wrapper>
            <Header>우정 퀴즈 by 윤성우</Header>
            <Title>성잘알 테스트!</Title>
            <Button onClick={handleClickButton}>
                <StartText>시작</StartText>
            </Button>
        </Wrapper>
    )
}

export default Home;


const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
    font-family: 'Jua', sans-serif;
    height: auto;
    width: 100%;
    background-color: #FFE6E6;

    /* 나머지는 빅데스크탑 */

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
    }

    @media screen and (max-width:899px) {
    /* 모바일 가로, 타블렛 세로 */
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
    }
`

const Header = styled.div`
    font-size: 40pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`

const Title = styled.div`
    font-size: 30pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const Button = styled.div`
    font-size: 30pt;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
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

const StartText = styled.div`
    font-size: 24pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    transform: translate(0%, 75%);
`