import React from "react";
import styled from "styled-components";
import mouseImage from "../images/mouse.png";
import deadMouseImage from "../images/deadmouse.png";

const CardBox = styled.div`
  border: 2px solid darkgrey;
  width: 8rem;
  padding: 1rem;
  margin: 1em;
  position: relative;
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  background: ${p => p.living ? "white" : "lightgrey"};
`;

const CardHeader = styled.div`
  position: absolute;
  font-weight: bold;
  top: 0;
  left: 50%;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: ${p => 30 + (Math.min(p.age, 5) * 10)}%;
  transition: ${p => p.alive && "max-width 2s"};
`;

const Bar = styled.div`
  height: 10px;
  display: inline-block;
  background: ${p => {
    if (p.length < 4) return "red";
    if (p.length < 6) return "orange";
    return "green";
  }};
  width: ${p => p.length * 5}px;
`;

const Heartbar = styled.div`
  height: 10px;
  display: inline-block;
  background: ${p => {
    if (p.length < 2) return "yellow";
    if (p.length < 3) return "#9acd32 ";
    return "green";
  }};
  width: ${p => p.length * 5}px;
`;

const MouseCard = (props) => {
  const { mouse } = props;
  return (
    <CardBox living={mouse.alive}>
      <CardHeader>{mouse.id}</CardHeader>
      <ImageBox>
        <Image src={mouse.alive ? mouseImage : deadMouseImage} alive={mouse.alive} age={mouse.age} />
      </ImageBox>
      <br/>
      <span> Age: {mouse.age}</span>
      <br/>
      <span> Robustness: <Bar length={mouse.robustness} /> </span>
      <br/>
      Happiness: <Heartbar length={Math.log(mouse.utility)} />
    </CardBox>
  )

}

export default MouseCard;
