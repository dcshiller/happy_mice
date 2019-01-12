import React from "react";
import styled from "styled-components";
import Game from "../models/Game";
import clock from "../helpers/Clock";
import Clock from "../components/Clock";
import MouseBox from "../components/MouseBox";
import FoodPort from "../components/FoodPort";
import StatCard from "../components/StatCard";
import mouseImage from "../images/mouse (copy).png";

const SiteTitle = styled.h1`
  color: white;
  font-family: 'Coiny', cursive;
  grid-column-end: 3;
  grid-column-start: 0;
  text-align: center;
  text-shadow: 2px 2px grey;
`;

const Blocker = styled.div`
  background: rgba(0,0,0,.2);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const MenuBar = styled.div`
  align-items: center
  display: flex;
  justify-content: center;
  margin: .3em auto 0 auto;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${p => p.over ? "scarlet" : "lightgrey"};
  cursor: pointer;
  font-weight: ${p => p.over && "bold"};
  outline: none;
  text-shadow: ${p => !p.over && "1px 1px grey"};
  &:hover {
    color: ${p => p.over ? "#B01212" : "white"};
  }
`;

const SiteModalTitle = styled(SiteTitle)`
  color: rgb(40,40,40);
  text-shadow: none;
`;

const SiteSubtitle = styled.h2`
  font-size: 1em;
  text-align: center;
`;

const About = styled.div`
  background: ivory;
  border: 2px solid tan;
  height: 30em;
  max-height: 60vh;
  left: calc(50vw - 15em);
  overflow: auto;
  padding: 2em;
  position: fixed;
  top: calc(50vh - 15em);
  width: 30em;
  z-index: 21;
  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    border: 1px solid rgba(0,0,0,.07);
    background: rgba(0,0,0,.05);
  }

  &::-webkit-scrollbar-thumb {
    background-color: tan;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
`;

const Num = styled.code`
  font-weight: bolder;
`;

const Blue  = styled.span`
  color: darkblue;
`;
const Red = styled.span`
  color: darkred;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Coiny', cursive;
  font-size: 1.2em;
  position: absolute;
  right: .3em;
  top: .3em;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: ${p => p.over ? "scarlet" : "lightgrey"};
  cursor: pointer;
  display: block;
  font-weight: ${p => p.over && "bold"};
  outline: none;
  text-shadow: ${p => !p.over && "1px 1px grey"};
  transition: color .3s;
  &:hover {
    color: ${p => p.over ? "#B01212" : "white"};
  }
`;

const Grid = styled.div`
  color: rgb(40,40,40);
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 3em;
  grid-template-columns: 30% 40% 30%;
  margin: auto;
  max-width: 800px;
  width: 100vw;
  box-sizing: border-box;
  * {
   border-radius: 4px;
   outline: none;
  }
  a {
    text-decoration: none;
    border-bottom: 1px solid rgba(40,40,40,.1);
    color: rgb(40,40,40);
    &:hover {
      border-bottom: 1px solid rgba(40,40,40,.6);
    }
  }
`;

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = { time: 0, paused: true, modal: true };
    this.game = new Game();
    clock.onTick(this.advance.bind(this));
    document.addEventListener("keyup", (e) => {
      if (e.keyCode == 32){
        if (this.state.paused) { clock.start(); this.setState({ paused: false }); }
        else { clock.stop(); this.setState({ paused: true }); }
      }
    });
    this.pause = () => { this.setState({paused: true }); };
    this.unpause = () => { this.setState({paused: false }); };
    this.hideModal = () => { clock.start(); this.setState({ paused: false, modal: false})};
    this.showModal = () => { clock.stop(); this.setState({ paused: true, modal: true})};
    this.toggleSound = () => { window.soundOn = !window.soundOn; this.forceUpdate()};
  }

  render() {
    return (
      <Grid>
        <link href="https://fonts.googleapis.com/css?family=Coiny|ZCOOL+QingKe+HuangYou" rel="stylesheet"/>
        <Blocker hidden={!this.state.modal} onClick={this.hideModal} />
        <About hidden={!this.state.modal}>
          <SiteModalTitle>Happy Mice </SiteModalTitle>
          <img src={mouseImage} width="10%" style={{margin: "auto", display: "block"}} />
          <SiteSubtitle>A Game of <a href="https://en.wikipedia.org/wiki/Wild_animal_suffering" target="_blank">Wild Animal Suffering</a></SiteSubtitle>
          <br/>
          <blockquote>
            <em>The superior power of population cannot be checked without producing misery or vice.</em>
            <br/>
            <div style={{float: "right", fontWeight: "bold"}}> - Thomas Malthus </div>
          </blockquote>
          <br/>
          <h3> Overview </h3>
          <p>
            Some mice have found their way into your pantry, where there is some food.
            Without more, they will starve to death.
            You can feed them, but beware: they may multiply.
          </p>
          <p>
            There is no official goal to the game, but mice are sensitive creatures
            who are capable of suffering,
            and so it would be better that they be happy.
            To assist you, some stats regarding their happiness are provided.
          </p>
          <h3> Gameplay </h3>
          <p>
            Your only control over the mice is through when and how you feed them.
            You can deposit a fixed amount of food by clicking on the "Feed Mice" button in the pantry window.
            There is no maximum amount of times you can feed them,
            so if you want to feed more, click faster!
          </p>
          <p>
            Every second of the game, another week passes. In that week the mice will eat and may breed.
            Each mouse will try to eat at least once. <Red>Eating makes mice happy.</Red> If it cannot, its robustness will go down. <Blue>Failing to eat makes mice unhappy.</Blue>
            <p>
            </p>
            Some mice will try to eat twice.
            If they succeed, their robustness will go up.
            If a mouse's robustness reaches <Num>6</Num> or more, the mouse may reproduce.
            This will cause <Num>4-13</Num> new mouse pups to enter the game.
          </p>
          <p>
            If an adult mouse's robustness ever drops below <Num>3</Num>, or if a mouse pup's robustness ever drops at all, the mouse will die. 
            <Blue> Starvation is an unpleasant way to die and will hurt the mouse's happiness score. </Blue>
            Mice which live more than a year have a chance of dying of old age.
          </p>
          <h3>Thanks</h3>
          <p> This game was created between 1/5/19 and 1/12/18 for the <a href="https://itch.io/jam/philosophy-game-jam" target="_blank">Philosophy Game Jam</a>.</p>
          <p> The mouse artwork for this game was uploaded to the Open Clip Art Library by  <a href="https://openclipart.org/user-detail/artbejo" target="_blank">artbejo</a>.</p>
          <p> Sounds for this game were uploaded to Freesound by <a href="https://freesound.org/people/Reitanna/" target="_blank">Reitanna</a> and <a href="https://freesound.org/people/Jon285/" target="_blank">Jon285</a>.</p>
          <p> This game uses Coiny and ZCool QingKe HuangYou from Google Fonts. </p>
          <p> This game was written in JavaScript using React and Gatsby. Code for the game available on <a href="https://github.com/dcshiller/happy_mice" target="_blank">Github</a>.</p>
          <br />
          <br />
          <em>For Oates</em>
          <br />
          <br />
          By <a href="https://www.derekshiller.com" target="_blank">Derek Shiller</a>, 2019
          <CloseButton onClick={this.hideModal}> X </CloseButton>
        </About>
        <style dangerouslySetInnerHTML={{__html: "body { background: darkgrey; }"}}/>
        <SiteTitle>Happy Mice
        <MenuBar>
          <ResetButton over={this.game.colony.livingMice().length === 0} onClick={this.reset.bind(this)}> reset</ResetButton>
          <MenuButton over={this.game.colony.livingMice().length === 0} onClick={this.showModal}> about </MenuButton>
          <MenuButton over={this.game.colony.livingMice().length === 0} onClick={this.toggleSound}> sound: {window.soundOn ? "on" : "off"} </MenuButton>
        </MenuBar>
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
    this.forceUpdate();
  }
  advance() {
    this.game.tick();
    this.setState({time: clock.time});
  }
}
