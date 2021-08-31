import React, { Component } from "react";
import styled, { css } from "styled-components";
import Safecash from "./telas/Safecash";
import Veja from "./telas/Veja";
import Metas from "./telas/Metas";
import Gastos from "./telas/Gastos";
import Logo from "./telas/Logo";

function Untitled(props) {
  return (
    <>
      <SafecashStack>
        <Safecash
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 1650,
            right: 0
          }}
        ></Safecash>
        <Veja
          style={{
            position: "absolute",
            top: 893,
            left: 0,
            height: 1150,
            right: 0
          }}
        ></Veja>
        <Metas
          style={{
            position: "absolute",
            top: 1871,
            left: 0,
            height: 1001,
            right: 0
          }}
        ></Metas>
        <Gastos
          style={{
            position: "absolute",
            top: 2767,
            left: 0,
            height: 896,
            right: 0
          }}
        ></Gastos>
      </SafecashStack>
      <Logo
        style={{
          height: 459
        }}
      ></Logo>
    </>
  );
}

const SafecashStack = styled.div`
  height: 3663px;
  margin-top: -14px;
  position: relative;
`;

export default Untitled;
