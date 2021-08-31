import React, { Component } from "react";
import styled, { css } from "styled-components";

function Gastos(props) {
  return (
    <Container {...props}>
      <Blacksquare2>
        <ImggastosStackStack>
          <ImggastosStack>
            <Imggastos
              src={require("..//images/undraw_Segment_analysis_re_ocsl.png").default}
            ></Imggastos>
            <Textgastos>
              Organize o seu dinheiro destinando uma porcentagem para cada
              objetivo como gastos fixos, gastos pessoais e gastos para
              prioridades financeiras.
            </Textgastos>
          </ImggastosStack>
          <Titlegastos>Organize seus gastos</Titlegastos>
        </ImggastosStackStack>
      </Blacksquare2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blacksquare2 = styled.div`
  background-color: #151515;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Imggastos = styled.img`
  top: 104px;
  left: 773px;
  width: 522px;
  height: 532px;
  position: absolute;
  object-fit: contain;
`;

const Textgastos = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 45px;
  letter-spacing: 3px;
  line-height: 100px;
  height: 502px;
  width: 798px;
`;

const ImggastosStack = styled.div`
  top: 136px;
  left: 0px;
  width: 1295px;
  height: 636px;
  position: absolute;
`;

const Titlegastos = styled.span`
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

const ImggastosStackStack = styled.div`
  width: 1295px;
  height: 772px;
  margin-top: 124px;
  margin-left: 41px;
  position: relative;
`;

export default Gastos;
