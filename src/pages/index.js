import React from "react";
import Game from "../models/Game";
import clock from "../helpers/Clock";
import Clock from "../components/Clock";
import MouseBox from "../components/MouseBox";
import FoodPort from "../components/FoodPort";
import StatCard from "../components/StatCard";
import styled from "styled-components";

const SiteTitle = styled.h1`
  text-align: center;
  grid-column-start: 0;
  grid-column-end: 3;
`;

const Grid = styled.div`
  grid-template-columns: 30% 50% 20%;
  display: grid;
  width: 100vw;
`;

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = { time: 0, paused: false };
    this.game = new Game();
    clock.onTick(this.advance.bind(this));
    clock.start();
    this.pause = () => { this.setState({paused: true }); };
    this.unpause = () => { this.setState({paused: false }); };
  }

  render() {
    return (
      <Grid>
        <SiteTitle>Happy Mice</SiteTitle>
        <StatCard game={this.game} time={clock.time} />
        <Clock clock={clock} time={clock.time} running={clock.isRunning()} pause={this.pause} unpause={this.unpause} />
        <FoodPort food={this.game.food.amount} addFood={this.game.addFood}/>
        <MouseBox colony={this.game.colony} />
      </Grid>
    );
  }

  advance() {
    this.game.tick();
    this.setState({time: clock.time});
  }
}
