import React from "react";
import styled from "styled-components";
import mouseImage from "../images/mouse.png";
import deadMouseImage from "../images/deadmouse.png";

const CardBox = styled.div`
  border: 2px solid darkgrey;
  width: 10rem;
  padding: 1rem;
  margin: 1em;
  position: relative;
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  background: ${p => p.living || "lightgrey"};
`;

const CardHeader = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  width: ${p => 30 + (Math.min(p.age, 5) * 10)}%;
`;

const Bar = styled.div`
  height: 10px;
  display: inline-block;
  background: ${p => {
    if (p.length < 4) return "red";
    if (p.length < 6) return "orange";
    return "green";
  }};
  width: ${p => p.length * 7}px;
`;

const Heartbar = styled.div`
  height: 10px;
  display: inline-block;
  background: ${p => {
    if (p.length < 2) return "yellow";
    if (p.length < 3) return "#9acd32 ";
    return "green";
  }};
  width: ${p => p.length * 7}px;
`;

const MouseCard = (props) => {
  const { mouse } = props;
  return (
    <CardBox living={mouse.alive}>
      <CardHeader>{mouse.id}</CardHeader>
      <ImageBox>
        <Image src={mouse.alive ? mouseImage : deadMouseImage} age={mouse.age} />
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
