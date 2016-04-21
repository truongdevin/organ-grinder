var React = require('react');
var TrackAction = require('../actions/trackaction');
var TrackStore = require('../stores/trackstore');

var Recorder = React.createClass({
  render: function() {
    return (
      <div id="recorders">
        <button type="button"
          onClick={this.handleRecording}
          className={this.state.className}
        >{this.state.button}
        </button> <br/>
        <button type="button" className="play">Play </button>
      </div>
    );
  },

  handleRecording: function(e){
    if (this.state.button === "Record") {
      TrackAction.startRecording();
      this.setState({button: "Stop", className: "stop"});
    } else {
      TrackAction.stopRecording();
      this.setState({button: "Record", className: ""});
    }
  },

  Play: function(e){
    TrackAction.startRecording();
  },
  getInitialState: function() {
    return {isRecording: false, Track: [], button: "Record", className: ""};
  }

});

module.exports = Recorder;
