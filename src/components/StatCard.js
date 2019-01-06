import React from "react";
import styled from "styled-components";

import { StyledSectionTitle, TabRow, Container } from "./StyledTitles";

const CardBox = styled.div`
  border: 2px solid grey;
  background: ivory;
  width: 10rem;
  padding: 1rem;
  position: relative;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
`;

const StatName = styled.span`
  font-weight: bold;
`;

const Stat = styled.div``;
const SubStat = styled.div`
  margin-left: 1em;
  ${SubStat} {
    font-size: .9em;
  }
`;

const StatCard = (props) => {
  const { game } = props;
  return (
    <CardBox>
      <TabRow>
        <Container>
          <StyledSectionTitle> Stats </StyledSectionTitle>
        </Container>
      </TabRow>
      <Stat><StatName>Utility</StatName></Stat>
      <SubStat><StatName>Total:</StatName> {game.utility()}</SubStat>
      <SubStat><StatName>Per Second:</StatName> {game.averageTimeUtility(props.time)}</SubStat>
      <SubStat><StatName>Per Mouse:</StatName> {game.averageMouseUtility()}</SubStat>
      <br/>
      <Stat><StatName>Mice</StatName></Stat>
      <SubStat><StatName>Alive:</StatName> {game.colony.livingMice().length}</SubStat>
      <SubStat><StatName>Deceased:</StatName> {game.colony.deadMice().length}</SubStat>
    </CardBox>
  );
}

export default StatCard;
