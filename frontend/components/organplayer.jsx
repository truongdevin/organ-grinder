var React = require('react');
var KeyStore = require('../stores/keystore');
var OrganKey = require('./organkey');
var Recorder = require('./recorder');

var ALLKEYS = [
  "C4",
  "Cs4",
  "D4",
  "Ds4",
  "E4",
  "F4",
  "Fs4",
  "G4",
  "Gs4",
  "A4",
  "As4",
  "B4",
  "C5"
];

var OrganPlayer = React.createClass({
  getInitialState: function(){
    return {blackKeys: [], whiteKeys: []};
  },

  componentDidMount: function(){
    var blackNotes = [];
    var whiteNotes = [];
    ALLKEYS.forEach( function(key){
      if (blackNotes.indexOf(key) === -1 && whiteNotes.indexOf(key) === -1){
        if (key.indexOf("s") !== -1) {
          blackNotes.push(key);
        } else {
          whiteNotes.push(key);
        }
      }
    });
    this.setState({blackKeys: blackNotes, whiteKeys: whiteNotes});
  },

  render: function(){
    var bKeys = [];
    var wKeys = [];
    this.state.blackKeys.forEach(function(key){
      bKeys.push(<OrganKey note={key} key={key}/>);
    });
    this.state.whiteKeys.forEach(function(key){
      wKeys.push(<OrganKey note={key} key={key}/>);
    });
    return (
      <div>
      <ul className="black-keys">
      {bKeys}
    </ul>
    <ul className="white-keys">
      {wKeys}
    </ul>
    <Recorder/> 
  </div> );
  }
});

module.exports = OrganPlayer;
