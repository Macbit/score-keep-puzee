import React from 'react';
import TitleBar from './TitleBar'; // default export
import AddPlayer from './AddPlayer'; // default export
import PlayerList from './PlayerList'; // default export
import PropTypes from 'prop-types'; // had to add as old version on video

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Created by Anton Puzorjov"/>
        <div className="wrapper">
            <PlayerList players={this.props.players}/>
            <AddPlayer/></div>
          </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
