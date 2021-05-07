import React from "react";
import styled from "styled-components";

function ChannelBrowser() {
  return (
    <ChannelContainer>
      <h3>Here you can browse available Sleak channels :)</h3>
      <p>
        <a href="#">Click here</a> to start browsing!
      </p>
    </ChannelContainer>
  );
}

export default ChannelBrowser;

const ChannelContainer = styled.div`
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
