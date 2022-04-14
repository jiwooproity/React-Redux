import React from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounterComponentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 0px;
`;

const CounterNumber = styled.span`
  font-size: 100px;
`;

const CounterButton = styled.button`
  width: 150px;

  font-size: 30px;

  margin: 0px 5px;
  padding: 10px;
`;

const Counter = () => {
  return (
    <CounterContainer>
      <CounterComponentWrap>
        <CounterNumber>0</CounterNumber>
      </CounterComponentWrap>
      <CounterComponentWrap>
        <CounterButton>PLUS</CounterButton>
        <CounterButton>MINUS</CounterButton>
      </CounterComponentWrap>
    </CounterContainer>
  );
};

export default Counter;
