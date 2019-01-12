import React from "react";
import styled from "styled-components";

import { StyledSectionTitle, TabRow, Container } from "./StyledTitles";

const CardBox = styled.div`
  border: 2px solid grey;
  background: ivory;
  width: calc(100% - 2em);
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
      <Stat><StatName>Happiness</StatName></Stat>
      <SubStat><StatName>Total:</StatName> {game.utility()}</SubStat>
      <SubStat><StatName>Per Second:</StatName> {game.averageTimeUtility(props.time)}</SubStat>
      <SubStat><StatName>Per Mouse:</StatName> {game.averageMouseUtility()}</SubStat>
      <SubStat><StatName>10, 50, 90%:</StatName> {game.medianMouseUtility(0.1)}, {game.medianMouseUtility(0.5)}, {game.medianMouseUtility(0.9)} </SubStat>
      <br/>
      <Stat><StatName>Mice</StatName></Stat>
      <SubStat><StatName>Alive:</StatName> {game.colony.livingMice().length}</SubStat>
      <SubStat><StatName>Deceased:</StatName> {game.colony.deadMice().length}</SubStat>
    </CardBox>
  );
}

export default StatCard;
