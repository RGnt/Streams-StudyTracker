import styled from "styled-components";

const colors = {
  Mushroom: "#fef2e4",
  Caramel: "#c9a66b",
  Cayenne: "#af4425",
  Cinnamon: "#662e1c",
};

export const PartListItemContainer = styled.div`
  height: 48px;
  margin-bottom: 0.25rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 1px 0px rgba(102, 46, 28, 0.2);
`;

export const PartListItemHeader = styled.h3`
  color: #af4425;
  max-width: 65%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PartListItemTogglesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ExpandToggleContainer = styled.div`
  height: 100%;
  width: 24px;
`;