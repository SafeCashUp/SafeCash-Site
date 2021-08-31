import React, { Component } from "react";
import styled, { css } from "styled-components";

function Metas(props) {
  return (
    <Container {...props}>
      <Whitesquare2Stack>
        <Whitesquare2>
          <TitlemetasStack>
            <Titlemetas>Defina suas metas</Titlemetas>
            <Textmetas>
              Com o Safe Cash você{"\n"}poderá definir metas de{"\n"}curto e
              longo prazo
            </Textmetas>
          </TitlemetasStack>
        </Whitesquare2>
        <Imgmetas
          src={require("../images/undraw_schedule_meeting_52nu.png").default}
        ></Imgmetas>
      </Whitesquare2Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Whitesquare2 = styled.div`
  top: 0px;
  left: 0px;
  height: 896px;
  position: absolute;
  background-color: #E6E6E6;
  right: 0px;
  flex-direction: column;
  display: flex;
`;

const Titlemetas = styled.span`
  font-family: Bebas Neue;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(237,132,64,1);
  font-size: 100px;
  width: 876px;
  height: 207px;
`;

const Textmetas = styled.span`
  font-family: Roboto;
  top: 182px;
  left: 1px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(20,20,20,1);
  font-size: 45px;
  letter-spacing: 3px;
  line-height: 100px;
  height: 502px;
  width: 641px;
`;

const TitlemetasStack = styled.div`
  width: 876px;
  height: 684px;
  margin-top: 97px;
  margin-left: 41px;
  position: relative;
`;

const Imgmetas = styled.img`
  top: 164px;
  left: 634px;
  width: 671px;
  height: 837px;
  position: absolute;
  object-fit: contain;
`;

const Whitesquare2Stack = styled.div`
  height: 1001px;
  position: relative;
`;

export default Metas;
