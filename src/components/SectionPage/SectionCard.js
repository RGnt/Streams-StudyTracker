import React from "react";
import { Card } from "@material-ui/core";
import {
  SectionContainer,
  SectionInnerContainer,
  SectionHeaderContainer,
  SectionHeader,
  PartsListContainer,
} from "./Styles";
import PartsListItem from "../PartsListItem/PartsListItem";

// #af4425 - Cayenne
// #662e1c - Cinnamon
// #ebdcb2 - Cream
// #c9a66b - Caramel
// #fd974f - Onion
// #805ab3b - Driftwood

// #fef2e4 - Mushroom -> Offwhite
// #eae2d6 - Linen -> Offwhite

// #c60000 - Red Pepper - Error
// #e1b80d - Lemon Tea - Warning

const SectionCard = (props) => {
  const total = props.parts.reduce((a, b) => a + b.score, 0);
  return (
    <SectionContainer>
      <Card style={{ backgroundColor: "#fef2e4", marginBottom: "0.4rem" }}>
        <SectionHeaderContainer>
          <SectionHeader>{props.SectionName}</SectionHeader>
        </SectionHeaderContainer>
        <SectionInnerContainer>
          <PartsListContainer>
            {props.parts.map((part) => {
              return <PartsListItem key={part.index} part={part} />;
            })}
          </PartsListContainer>
        </SectionInnerContainer>
      </Card>
    </SectionContainer>
  );
};

export default SectionCard;
