import React from "react";
import styled from "styled-components";
import { StyledSectionTitle, TabRow, Container } from "./StyledTitles";

const CardBox = styled.div`
  border: 2px solid grey;
  background: ${p => p.running ? "ivory" : "salmon" };
  width: 10rem;
  padding: 1rem;
  position: relative;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  cursor: pointer;
`;


const Time = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin: auto;
  text-align: center;
`;

const Instructions = styled.div`
  color: ${p => p.running ? "grey" : "white"};
  font-size: .8em;
  width: auto;
  text-align: center;
`;

const displayTime = (s) => {
  const minutes = Math.floor(s / 60);
  let seconds = s % 60 + "";
  if (seconds.length < 2) seconds = "0" + seconds;
  return `${minutes} : ${seconds}`;
}

const Clock = (props) => {
  const stop = () => { props.clock.stop(); props.pause() };
  const start = () => { props.clock.start(); props.unpause() };
  const pauseButton = <button onClick={stop}> Pause </button>
  const unpauseButton = <button onClick={start}> Restart </button>
  return (
    <CardBox running={props.running} onClick={props.running ? stop : start} >
      <TabRow>
        <Container>
          <StyledSectionTitle> Clock </StyledSectionTitle>
        </Container>
      </TabRow>
      <Time>{displayTime(props.clock.time)}</Time>
      <br/>
      <Instructions running={props.running} >(<em>click or space to {props.running ? "pause" : "unpause"}</em>)</Instructions>
    </CardBox>
  )
}

export default Clock;
