import React from 'react';
import  BackGroundImg from '../../assets/images/summary-bgc.jpg'
import styled from 'styled-components';
import SummaryInfoCard from './SummaryInfoCard';

const Summary = () => {
    return (
        <Container>
            <ImgStyled src={BackGroundImg} alt="summary" />
            <SummaryInfoCard/>
        </Container>
    );
};

export default Summary;

const Container = styled.div`
    height: 527px;
`

const ImgStyled = styled.img`
    height: 432px;
    width: 100%;

`