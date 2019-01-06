import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  border: 1px solid black;
  width: 10rem;
  padding: 1rem;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
  margin: 1em;
`;

const StatName = styled.span``;
const Stat = styled.div``;
const SubStat = styled.div`
  margin-left: 1em;
`;

const StatCard = (props) => {
  const { game } = props;
  return (
    <CardBox>
      <Stat><StatName>Utility</StatName></Stat>
      <SubStat><StatName>Total:</StatName> {game.utility()}</SubStat>
      <SubStat><StatName>Time Average:</StatName> {game.averageTimeUtility(props.time)}</SubStat>
      <SubStat><StatName>Mouse Average:</StatName> {game.averageMouseUtility()}</SubStat>
      <Stat><StatName>Mice</StatName></Stat>
      <SubStat><StatName>Living:</StatName> {game.colony.livingMice().length}</SubStat>
      <SubStat><StatName>Dead:</StatName> {game.colony.deadMice().length}</SubStat>
    </CardBox>
  );
}

export default StatCard;
