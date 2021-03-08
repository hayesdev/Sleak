import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <HeaderContainer>
      {/* header left */}
      <HeaderLeft>
        <HeaderAvatar />
      </HeaderLeft>

      {/* header middle */}

      {/* header right */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  color: red;
`;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
