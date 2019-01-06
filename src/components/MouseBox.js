import React from "react";
import MouseCard from "./MouseCard";
import styled from "styled-components";
import { StyledSectionTitle } from "./StyledTitles";

const StyledMouseBox = styled.div`
  border: 2px solid grey;
  display: flex
  flex-direction: row;
  flex-wrap: wrap;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 4;
  width: 100%;
  padding: 1em;
  min-height: 300px;
  background: ivory;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.div`
  display: block;
  position: absolute;
  left: 50%;
  top: 0;
`;

const Container = styled.div`
  position: relative;
`;

const TabRow = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  width: 100%;
`;

const Tab = styled.button`
  background: ${p => p.selected ? "ivory" : "tan"};
  border: 2px solid grey;
  border-bottom: ${p => p.selected && "2px solid ivory"};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 4px;
  outline: none;
`;

export default class MouseBox extends React.Component {
  constructor() {
    super();
    this.state = { display: "all" }
    this.setLiving = () => this.setState({display: "alive"});
    this.setAll = () => this.setState({display: "all"});
  }

  render(){
    return (
      <StyledMouseBox>
        <TabRow>
          <Container>
          <Tab onClick={this.setLiving} selected={this.state.display === "alive"} >Living</Tab>
          <Tab onClick={this.setAll} selected={this.state.display === "all"} >All</Tab>
          <StyledSectionTitle> Mice </StyledSectionTitle>
        </Container>
        </TabRow>
        {this.renderCards()}
      </StyledMouseBox>
    );
  }

  renderCards(){
    let relevantMice;
    if (this.state.display === "all") relevantMice = this.props.colony.mice;
    else if (this.state.display === "alive") relevantMice = this.props.colony.livingMice();
    return relevantMice.map(m => this.renderCard(m))
  }

  renderCard(mouse) {
    return <MouseCard mouse={mouse} key={mouse.id} />
  }
}
