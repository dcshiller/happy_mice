import React from "react";
import { StyledSectionTitle, TabRow, Container } from "./StyledTitles";
import styled from "styled-components";
const grainImage = "./images/grain.jpg";

const StyledFoodPort = styled.div`
  border: 2px solid grey;
  background: ivory;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  padding: 3rem;
  position: relative;
`;

const HideOverflow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const FoodPyramid = styled.div`
  border: 2px solid tan;
  width: 1000px;
  height: 1000px;
  max-width: ${p => Math.sqrt(p.amount) * 15}px;
  max-height: ${p => Math.sqrt(p.amount) * 15}px;
  transform: translateY(60%) translateX(-50%) rotate(45deg);
  transition: max-width 1s, max-height 1s;
  position: absolute;
  bottom: 0;
  left: 50%;
`;

const AddFoodButton = styled.button`
  background: ${p => p.disabled ? "lightgrey" : "radial-gradient(yellow, yellow, khaki)"};
  border: 3px solid ${p => p.disabled ? "darkgrey" : "tan"};
  font-weight: bold;
  font-size: 1.1em;
  color: black;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  padding: .5em;
  transform: translateX(-50%);
  z-index: 20;
  outline: none;
  cursor: ${p => p.disabled ? "not-allowed" : "pointer"};
`;

const FoodPort = (props) => {
  return (
    <StyledFoodPort>
      <TabRow>
        <Container>
          <StyledSectionTitle> Pantry </StyledSectionTitle>
        </Container>
      </TabRow>
      <HideOverflow>
        <AddFoodButton disabled={props.disabled} onClick={!props.disabled && props.addFood}>Feed Mice</AddFoodButton>
      <FoodPyramid style={{
          backgroundImage: `url(${grainImage})`
        }} amount={props.food} />
    </HideOverflow>
    </StyledFoodPort>
  )
}

export default FoodPort;
