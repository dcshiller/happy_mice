import React from "react";
import styled from "styled-components";
import grainImage from "../images/grain.jpg";

const StyledFoodPort = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  padding: 3rem;
  position: relative;
  overflow: hidden;
`;

const FoodPyramid = styled.div`
  background: yellow;
  background-image: url(${grainImage});
  border: 2px solid tan;
  width: ${p => Math.sqrt(p.amount) * 15}px;
  height: ${p => Math.sqrt(p.amount) * 15}px;
  transform: translateY(60%) translateX(-50%) rotate(45deg);
  position: absolute;
  bottom: 0;
  left: 50%;
`;

const AddFoodButton = styled.button`
  background: yellow;
  border: 2px solid tan;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const FoodPort = (props) => {
  return (
    <StyledFoodPort>
      <AddFoodButton onClick={props.addFood}>Add Food</AddFoodButton>
      <FoodPyramid amount={props.food} />
    </StyledFoodPort>
  )
}

export default FoodPort;
