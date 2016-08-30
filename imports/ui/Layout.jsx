import React, { Component } from 'react';

export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPalnetName: 'Earth',
    }
  }

  isAPlanet() {
    return this.state.currentPalnetName;
  }

  getName() {
    if (this.isAPlanet()) return this.state.currentPalnetName;
    return this.currentGalaxyName(); // Otherwise
  }

  render() {
    return (
      <div>
        <h1>Hello {this.getName()}!</h1>
      </div>
    );
  }
}
