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
  color: white;
  text-shadow: 1px 1px grey;
  grid-column-start: 0;
  grid-column-end: 3;
  font-family: 'Coiny', cursive;
`;

const About = styled.div`
  position: fixed;
  width: 500px;
  background: white;
  border: 2px solid tan;
  left: calc(50vw - 250px);
  top: calc(50vh - 150px);
  height: 300px;
  z-index: 21;
`;

const ResetButton = styled.button`
  border: none;
  background: none;
  text-shadow: ${p => !p.over && "1px 1px grey"};
  color: ${p => p.over ? "scarlet" : "lightgrey"};
  font-weight: ${p => p.over && "bold"};
  outline: none;
  cursor: pointer;
  display: block;
  margin: auto;
  transition: color .3s;
  &:hover {
    color: ${p => p.over ? "#B01212" : "white"};
  }
`;

const Grid = styled.div`
  color: rgb(40,40,40);
  grid-template-columns: 30% 40% 30%;
  display: grid;
  grid-row-gap: 3em;
  grid-column-gap: 1em;
  width: 100vw;
  max-width: 800px;
  margin: auto;
  box-sizing: border-box;
`;

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = { time: 0, paused: false, modal: true };
    this.game = new Game();
    clock.onTick(this.advance.bind(this));
    clock.start();
    document.addEventListener("keyup", (e) => {
      if (e.keyCode == 32){
        if (this.state.paused) { clock.start(); this.setState({ paused: false }); }
        else { clock.stop(); this.setState({ paused: true }); }
      }
    });
    this.pause = () => { this.setState({paused: true }); };
    this.unpause = () => { this.setState({paused: false }); };
    this.hideModal = () => { this.setState({ modal: false})};
    this.showModal = () => { this.setState({ modal: true})};
  }

  render() {
    return (
      <Grid>
        <link href="https://fonts.googleapis.com/css?family=Coiny|ZCOOL+QingKe+HuangYou" rel="stylesheet"/>
        <About hidden={!this.state.modal}>
          <SiteTitle style={{ color: "black" }}> Happy Mice </SiteTitle>
          <p>A Game of Wild Animal Suffering and Population Ethics</p>
          <button onClick={this.hideModal}> close </button>
        </About>
        <style dangerouslySetInnerHTML={{__html: "body { background: darkgrey; }"}}/>
        <SiteTitle>Happy Mice
        <ResetButton over={this.game.colony.livingMice().length === 0} onClick={this.reset.bind(this)}>(Reset)</ResetButton>
        <button onClick={this.showModal}> menu </button>
        </SiteTitle>
        <StatCard game={this.game} time={clock.time} />
        <Clock clock={clock} time={clock.time} running={clock.isRunning()} pause={this.pause} unpause={this.unpause} />
        <FoodPort food={this.game.food.amount} addFood={this.game.addFood} disabled={!clock.isRunning()}/>
        <MouseBox colony={this.game.colony} />
      </Grid>
    );
  }

  reset() {
    this.game = new Game();
    clock.reset();
  }
  advance() {
    this.game.tick();
    this.setState({time: clock.time});
  }
}
