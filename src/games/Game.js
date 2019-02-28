import React from "react";
import * as Phaser from "phaser";
import { SceneMain } from "./Scene/SceneMain";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: null
    };
    this.game = null;
    this.gameContainer = React.createRef();
  }
  render() {
    return (
      <div ref={this.gameContainer} style={{ border: "10px solid red" }}>
        {new Phaser.Game(this.state.config)}
      </div>
    );
  }

  componentDidMount() {
    const config = {
      type: Phaser.AUTO, // let browser what web graphic libary to use : canvas or WebGL
      width: 1200,
      height: 1200,
      parent: [this.gameContainer.current.id], // what container to use
      scene: [SceneMain] // Game Screens
    };
    this.setState({ config });
    // this.game = new Phaser.Game(this.state.config);
  }
}
export default Game;
