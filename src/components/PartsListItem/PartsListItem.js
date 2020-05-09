import React, { useState } from "react";
import {
  PartListItemContainer,
  PartListItemHeader,
  PartListItemTogglesContainer,
  ExpandToggleContainer,
} from "./Styles";
import { Switch, Icon } from "@material-ui/core";
import styled from "styled-components";

const PartsListOuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CourseMaterialContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-left: 0.5rem;
`;

const CourseMaterialLinkContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  margin-bottom: 0.2rem;
  display: flex;
  box-shadow: 0px 1px 1px 0px rgba(102, 46, 28, 0.2);
  align-items: center;
`;

const CourseMaterialIcon = styled.div`
  margin-left: 1rem;
`;

const CourseGoToLink = styled.a`
  margin-left: 0.5rem;  
  text-decoration: none;
  color: #805a3b;
  :hover {
    color: #c60000;
  }
`;
const PartsListItem = ({ part }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCompleted, setIcompleted] = useState(part.isComplete);

  const iconForType = {
    repository: "storage",
    link: "link"
  }

  return (
    <>
      <PartsListOuterContainer>
        <PartListItemContainer>
          <PartListItemHeader>{part.name}</PartListItemHeader>
          <PartListItemTogglesContainer>
            <Switch checked={isCompleted} />
            <ExpandToggleContainer>
              {part.material.length > 0 ? (
                <Icon onClick={() => setIsExpanded(!isExpanded)}>
                  expand_more
                </Icon>
              ) : null}
            </ExpandToggleContainer>
          </PartListItemTogglesContainer>
        </PartListItemContainer>
        {isExpanded ? (
          <CourseMaterialContainer>
            {part.material.map((item, i) => (
              <CourseMaterialLinkContainer key={`${item.type}-${i}`}>
                <CourseMaterialIcon>
                  <Icon>{iconForType[item.type]}</Icon>
                </CourseMaterialIcon>
                <CourseGoToLink href={item.content}>Go to</CourseGoToLink>
              </CourseMaterialLinkContainer>
            ))}
          </CourseMaterialContainer>
        ) : null}
      </PartsListOuterContainer>
    </>
  );
};

export default PartsListItem;
