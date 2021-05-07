import React from "react";
import styled from "styled-components";

function Threads() {
  return (
    <ThreadContainer>
      <h3>This is where you can start a new thread in Sleak :)</h3>
      <p>
        <a href="#">Click here</a> to start a thread!
      </p>
    </ThreadContainer>
  );
}

export default Threads;

const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  > h3,
  p {
    margin: 5px;
  }
`;
