import React from "react";
import MouseCard from "./MouseCard";
import styled from "styled-components";

const StyledMouseBox = styled.div`
  border: 2px solid brown;
  display: flex
  flex-direction: row;
  flex-wrap: wrap;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 4;
  width: calc(98vw - 2em);
  padding: 1em;
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
        <button onClick={this.setLiving}>Living</button>
        <button onClick={this.setAll}>All</button>
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
