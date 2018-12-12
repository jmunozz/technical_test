import React, { Component } from 'react';
import './index.css';

class App extends Component {

  state = {
    ticks: [false, false, false, false, false],
  }

  check = (index) => {
    const { state } = this;
    const { ticks } = state;
    const newTicks = [...ticks]
    newTicks[index] = !newTicks[index];
    this.setState({ticks: newTicks});
  }

  checkAll = () => {
    const { state } = this;
    const { ticks } = state;
    let newTicks;
    if (ticks.includes(false)) {
      newTicks = ticks.map(tick => true);
    } else {
      newTicks = ticks.map(tick => !tick);
    }
    this.setState({ticks: newTicks});
  }

  render() {

    const { state } = this;
    const { ticks } = state;
    console.log(state);

    const ticksList = ticks.map((tick, index) => {
      return (
        <input 
          key={index}
          type="checkbox" 
          checked={tick} 
          onChange={() => this.check(index)}
        />
      );
    });

    const isAllTicksChecked = !ticks.includes(false);

    return (
      <div className="App">
        <h1>react-level-1</h1>
        <div className="ticks-total-container">
          <input 
            type="checkbox" 
            checked={isAllTicksChecked}
            onChange={() => this.checkAll()}></input>
        </div>
        <div className="ticks-container">
          {ticksList}
        </div>
      </div>
    );
  }
}

export default App;
