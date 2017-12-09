import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) { //custom method
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
    render() {
      return (
          <div className="item">
            {/* // when we pass component to event listener, we have to manually preserve the binding */}
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
                <button className="button">Add Player</button>
            </form>
          </div>
      );
    }
};
