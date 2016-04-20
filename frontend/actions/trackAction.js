var AppDispatcher = require("../dispatcher/dispatcher.js");

var TrackActions = {
  stopRecording: function(notes){
    AppDispatcher.dispatch({
      actionType: 'STOP_RECORDING',
      notes: notes
    });
  }
};

module.exports = TrackActions;
