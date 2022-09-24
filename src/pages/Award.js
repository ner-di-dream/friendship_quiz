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
    font-size: 64pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
`

export default Award;