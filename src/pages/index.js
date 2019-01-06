import React from "react";
import Game from "../models/Game";
import clock from "../helpers/Clock";
import Clock from "../components/Clock";
import MouseCard from "../components/MouseCard";
import FoodPort from "../components/FoodPort";



export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = { time: 0 };
    this.game = new Game();
    clock.onTick(this.advance.bind(this));
  }

  render() {
    return (
      <React.Fragment>
      <h1> Happy Mice </h1>
      <Clock time={clock.time} />
      <FoodPort food={this.game.food.amount} />
      {this.game.colony.mice.map(m => <MouseCard mouse={m} key={m.id} />)}
    </React.Fragment>
    );
  }

  advance() {
    this.game.tick();
    this.setState({time: clock.time});
  }
}
