import React from "react";
import styled from "styled-components";

import DistributionLine from "./DistributionLine";

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
  margin-right: .3em;
`;

const Stat = styled.div``;
const SubStat = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
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
      <SubStat style={{marginTop: "-22px"}} ><StatName>Distribution:</StatName> <DistributionLine distribution={game.colony.distribution()}/> </SubStat>
      <Stat><StatName>Food</StatName></Stat>
      <SubStat><StatName>Total:</StatName> {game.food.amount}</SubStat>
      <br />
      <Stat><StatName>Mice</StatName></Stat>
      <SubStat><StatName>Living:</StatName> {game.colony.livingMice().length} of {game.colony.mice.length}</SubStat>
      <SubStat><StatName>Avg. Age:</StatName> {game.colony.averageAge()} Weeks</SubStat>
    </CardBox>
  );
}

export default StatCard;
