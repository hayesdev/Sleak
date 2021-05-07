import React from "react";
import styled from "styled-components";

function Apps() {
  return (
    <AppsContainer>
      <h3>Search from many new and useful apps in Sleak 🥰 </h3>
      <p>
        Select a channel to chat, or <a href="#">click here</a> to start a
        search!
      </p>
    </AppsContainer>
  );
}

export default Apps;

const AppsContainer = styled.div`
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
