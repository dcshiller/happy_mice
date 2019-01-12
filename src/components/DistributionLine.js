import React from "react"
import styled from "styled-components";
const SVG = styled.svg`
  display: inline-block;
  width: 80px;
  height: 60px;
`;

const Path = styled.path`
  stroke: black;
  stroke-width: 2;
  stroke-opacity: 1;
  fill: transparent;
`;

const BasePath = styled.path`
  stroke: black;
  stroke-width: 1;
  stroke-opacity: .8;
  fill: transparent;
`;

const DistributionLine = (props) => {
  const values = props.distribution.map(a => -a / 3);
  const firstValue = values.shift();
  const step = 80 / values.length;
  let directions = `m 0 ${30 + firstValue}`;
  let lastValue = firstValue;
  for (let value of values) {
    directions = directions + ` l ${step} ${value - lastValue}`;
    lastValue = value;
  }
  return (
    <SVG>
      <BasePath d="m 0 30 l 80 0" />
      <Path d={directions} />
    </SVG>
  );

}

export default DistributionLine;
