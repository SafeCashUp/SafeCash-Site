import React, { Component } from "react";
import styled, { css } from "styled-components";

function Logo(props) {
  return (
    <Container {...props}>
      <Blacksquare3>
        <Image src={require("../images/safecash-logo2.png").default}></Image>
      </Blacksquare3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blacksquare3 = styled.div`
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Image = styled.img`
  width: 249px;
  height: 100%;
  margin-top: 105px;
  margin-left: 558px;
  object-fit: contain;
`;

export default Logo;
