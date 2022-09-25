import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Award from './Award';

const Result = () => {
    const location = useLocation();
    const score = location.state.score;
    const [animationScore, setAnimationScore] = useState(0);
    const aniScore_ref = useRef(0);


    useEffect(() => { 
        const loop = setInterval(() => {
            var step = Math.ceil((score - aniScore_ref.current) / 20) / 10;
            if(animationScore >= score)
            {
                clearInterval(loop);
            }
            aniScore_ref.current += step;
            setAnimationScore(Math.round(aniScore_ref.current));
        }, 10);
    }, []);

    return (
        <Wrapper>
            <ScoreText>{animationScore}%</ScoreText>
            {score <= animationScore ? <Award score={score}></Award> : null}
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

const ScoreText = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 60vh;

    /* 나머지는 빅데스크탑 */
    font-size: 288pt;

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
    font-size: 216pt;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
    font-size: 144pt;
    }

    @media screen and (max-width:899px) {
    /* 모바일 가로, 타블렛 세로 */
    font-size: 96pt;
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
    font-size: 48pt;
    }
`

export default Result;