import React from "react";
import styled from "styled-components";

function SavedItems() {
  return (
    <SavedContainer>
      <h3>This is where you can view items you have saved 😇</h3>
      <p>
        Select a channel to chat, or <a href="#">click here</a> to view your
        items!
      </p>
    </SavedContainer>
  );
}

export default SavedItems;

const SavedContainer = styled.div`
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
