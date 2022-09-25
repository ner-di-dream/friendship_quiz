import React from 'react';
import styled from 'styled-components';

const Award = (props) => {

    if(props.score >= 100)
    {
        return (
            <AwardText>
            <p style={{color: "aquamarine"}}>당신은 완벽한 성잘알!</p>
            </AwardText>
        )
    }
    else if(props.score >= 80)
    {
        return (
            <AwardText>
            <p style={{color: "goldenrod"}}>성잘알 인정합니다.</p>
            </AwardText>
        )
    }
    else if(props.score >= 60)
    {
        return (
            <AwardText>
            <p style={{color: "silver"}}>이 정도면 괜찮네.</p>
            </AwardText>
        )
    }
    else if(props.score >= 40)
    {
        return (
            <AwardText>
            <p>더 분발하게나.</p>
            </AwardText>
        )
    }
    else
    {
        return (
            <AwardText>
            <p>성우랑 더 친해지려무나.</p>
            </AwardText>
        )
    }
}

const AwardText = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 20vh;

    /* 나머지는 빅데스크탑 */
    font-size: 64pt;

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
    font-size: 52pt;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
    font-size: 40pt;
    }

    @media screen and (max-width:899px) {
    /* 모바일 가로, 타블렛 세로 */
    font-size: 32pt;
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
    font-size: 24pt;
    }
`

export default Award;