var AppDispatcher = require("../dispatcher/dispatcher.js"),
    Store = require("flux/utils").Store,
    Note = require('../util/note.js'),
    TONES = require('../constants/tones'),
    _notesPlaying = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case 'PLAY_NOTE':
      var note = payload.note;
      KeyStore.playNote(note);
      KeyStore.__emitChange();
      break;
    case 'STOP_NOTE':
      note = payload.note;
      KeyStore.stopNote(note);
      KeyStore.__emitChange();
      break;
  }

};

KeyStore.playNote = function (note) {
  var key = new Note(TONES[note]);
  var included = false;
  for (var i = 0; i < _notesPlaying.length; i++) {
    if (note === _notesPlaying[i][0]) {
      included = true;
    }
  }
  if (!included) {
    _notesPlaying.push([note, key]);
    key.start();
  }
};

KeyStore.stopNote = function (note) {
  for (var i = 0; i < _notesPlaying.length; i++) {
    if (note === _notesPlaying[i][0]) {
      _notesPlaying[i][1].stop();
      _notesPlaying.splice(i,1);
    }
  }
};
