import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  border: 1px solid black;
  width: 10rem;
  padding: 1rem;
  background: ${p => p.living || "grey"};
`;

const MouseCard = (props) => {
  const { mouse } = props;
  return (
    <CardBox living={mouse.alive}>
      <strong> Mouse </strong>
      {mouse.id}
    </CardBox>
  )

}

export default MouseCard;
