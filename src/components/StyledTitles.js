import React from "react";
import styled from "styled-components";

export const StyledSectionTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  display: block;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateY(-.3em) translateX(-50%);
`;

export const TabRow = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  min-height: 1.5em;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
`;
