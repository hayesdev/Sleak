import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { Link } from "react-router-dom";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import AddIcon from "@material-ui/icons/Add";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  // const roomEnter = () => {
  //   console.log("clicked");
  // };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>SLEAK HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <Link to="/threads" className="link">
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      </Link>
      <Link to="/mentions" className="link">
        <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      </Link>

      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => {
        return (
          <SidebarOption
            key={doc.id}
            id={doc.id}
            title={doc.data().name}
            // onClick={roomEnter}
          />
        );
      })}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--sleak-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid var(--sleak-secondary);
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 0.5px solid var(--sleak-secondary);
  }

  .link {
    text-decoration: none;
    color: white;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--sleak-secondary);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--sleak-secondary);
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
    :hover {
      opacity: 0.8;
    }
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: #58e870;
  }
`;
