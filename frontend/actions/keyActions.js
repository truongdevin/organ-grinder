var AppDispatcher = require("../dispatcher/dispatcher.js");

var KeyActions = {
  playNote: function(note){
    AppDispatcher.dispatch({
      actionType: 'PLAY_NOTE',
      note: note
    });
  },
  stopNote: function(note){
    AppDispatcher.dispatch({
      actionType: 'STOP_NOTE',
      note: note
    });
  }
};

module.exports = KeyActions;
