import React from "react";
import styled from "styled-components";

function Mentions() {
  return (
    <MentionContainer>
      <h3>View your mentions and see reactions in Sleak 🤩</h3>
      <p>
        Select a channel to chat, or <a href="#">click here</a> to see mentions!
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
