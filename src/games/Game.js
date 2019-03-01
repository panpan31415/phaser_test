import React from "react";
import * as Phaser from "phaser";
import { SceneMain } from "./Scene/SceneMain";
class Game extends React.Component {
  render() {
    //console.log(JSON.stringify(this.gameContainer.current.props.id));
    return <div id={"game-container"} />;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const config = {
      type: Phaser.AUTO, // let browser what web graphic libary to use : canvas or WebGL
      width: 800,
      height: 600,
      parent: "game-container", // what container to use
      scene: SceneMain, // Game Screens
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      }
    };

    this.game = new Phaser.Game(config);
  }
}
export default Game;
