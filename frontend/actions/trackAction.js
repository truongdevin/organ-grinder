var AppDispatcher = require("../dispatcher/dispatcher.js");

var TrackActions = {
  stopRecording: function(notes){
    AppDispatcher.dispatch({
      actionType: 'STOP_RECORDING',
      notes: notes
    });
  },
  startRecording: function() {
    AppDispatcher.dispatch({
      actionType: 'START_RECORDING',
      name: "NAME OF TRACK"
    });
  },
  play: function() {
    AppDispatcher.dispatch({
      actionType: 'Play'
    });
  }
};

module.exports = TrackActions;
