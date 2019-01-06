import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  border: 1px solid black;
  width: 10rem;
  padding: 1rem;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: 1em;
`;

const Clock = (props) => {
  const stop = () => { props.clock.stop(); props.pause() };
  const start = () => { props.clock.start(); props.unpause() };
  const pauseButton = <button onClick={stop}> Pause </button>
  const unpauseButton = <button onClick={start}> Restart </button>
  return (
    <CardBox>
      { props.time }
      { props.running ? pauseButton : unpauseButton }
    </CardBox>
  )
}

export default Clock;
