import React from "react";
import styled from "styled-components";

function Mentions() {
  return (
    <MentionContainer>
      <h3>
        This is where you can see mentions of you and reactions in Sleak :)
      </h3>
      <p>
        <a href="#">Click here</a> to start a thread!
      </p>
    </MentionContainer>
  );
}

export default Mentions;

const MentionContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
