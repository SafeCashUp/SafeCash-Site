import React, { Component } from "react";
import styled, { css } from "styled-components";

function Veja(props) {
  return (
    <Container {...props}>
      <Blacksquare1>
        <ImgStatisticsStackStack>
          <ImgStatisticsStack>
            <ImgStatistics
              src={require("../images/undraw_Investing_re_bov72.png").default}
            ></ImgStatistics>
            <TitleVeja>Veja o seu dinheiro render</TitleVeja>
          </ImgStatisticsStack>
          <TexteVeja>
            Use o Safe Cash para{"\n"}se planejar financeiramente{"\n"}e
            economizar
          </TexteVeja>
        </ImgStatisticsStackStack>
      </Blacksquare1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blacksquare1 = styled.div`
  background-color: rgba(21,21,21,1);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const ImgStatistics = styled.img`
  top: 111px;
  left: 683px;
  width: 516px;
  height: 516px;
  position: absolute;
  object-fit: contain;
`;

const TitleVeja = styled.span`
  font-family: Bebas Neue;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(237,132,64,1);
  font-size: 100px;
  width: 876px;
  height: 130px;
`;

const ImgStatisticsStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1199px;
  height: 627px;
  position: absolute;
`;

const TexteVeja = styled.span`
  font-family: Roboto;
  top: 235px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 45px;
  letter-spacing: 3px;
  line-height: 100px;
  height: 317px;
  width: 641px;
`;

const ImgStatisticsStackStack = styled.div`
  width: 1199px;
  height: 627px;
  margin-top: 153px;
  margin-left: 64px;
  position: relative;
`;

export default Veja;
