import React from "react";
import styled from "styled-components";

function FileBrowser() {
  return (
    <FileContainer>
      <h3>Here you can browse files you have saved in Sleak 🤓</h3>
      <p>
        Select a channel to chat, or <a href="#">click here</a> to start
        browsing!
      </p>
    </FileContainer>
  );
}

export default FileBrowser;

const FileContainer = styled.div`
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
