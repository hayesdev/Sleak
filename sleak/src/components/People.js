import React from "react";
import styled from "styled-components";

function People() {
  return (
    <PeopleContainer>
      <h3>Connect with new people in the Sleak community 😎</h3>
      <p>
        Select a channel to chat, or <a href="#">click here</a> to start
        exploring!
      </p>
    </PeopleContainer>
  );
}

export default People;

const PeopleContainer = styled.div`
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
