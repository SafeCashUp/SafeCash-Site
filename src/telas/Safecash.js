import React, { Component } from "react";
import styled, { css } from "styled-components";
import '../index.css';

function Safecash(props) {
  return (
    <Container {...props}>
      <Orangesquare>
        <Group>
          <SafewhiteStack>
            <Safewhite>SAFE</Safewhite>
            <Safeblack>SAFE</Safeblack>
            <Cashblack>CASH</Cashblack>
            <Cash3>CASH</Cash3>
          </SafewhiteStack>
        </Group>
      </Orangesquare>
      <Whitesquare1>
        <TextEconomize>Economize seu dinheiro como nunca!</TextEconomize>
      </Whitesquare1>
    </Container>
  );
  
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Orangesquare = styled.div`
  height: 683px;
  background-color: rgba(234,107,25,0.84);
  flex-direction: column;
  display: flex;
`;

const Group = styled.div`
  width: 614px;
  height: 646px;
  flex-direction: column;
  display: flex;
  align-self: center;
`;

const Safewhite = styled.span`
  font-family: Bebas Neue;
  top: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 350px;
  height: 386px;
  width: 524px;
  left: 25px;
`;

const Safeblack = styled.span`
  font-family: Bebas Neue;
  top: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 350px;
  height: 386px;
  width: 524px;
  left: 39px;
`;

const Cashblack = styled.span`
  font-family: Bebas Neue;
  top: 260px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 350px;
  height: 386px;
  width: 583px;
`;

const Cash3 = styled.span`
  font-family: Bebas Neue;
  top: 260px;
  left: 19px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 350px;
  height: 386px;
  width: 595px;
`;

const SafewhiteStack = styled.div`
  width: 614px;
  height: 646px;
  position: relative;
`;

const Whitesquare1 = styled.div`
  height: 289px;
  background-color: rgba(228,228,228,1);
  flex-direction: column;
  display: flex;
`;

const TextEconomize = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 60px;
  margin-top: 69px;
  align-self: center;
`;

export default Safecash;
