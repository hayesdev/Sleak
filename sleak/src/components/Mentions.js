import React from "react";
import styled from "styled-components";

function Mentions() {
  return (
    <MentionContainer>
      <h3>View mentions of you and see reactions in Sleak :)</h3>
      <p>
        <a href="#">Click here</a> to see your mentions!
      </p>
    </MentionContainer>
  );
}

export default Mentions;

const MentionContainer = styled.div`
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
