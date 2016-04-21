var AppDispatcher = require("../dispatcher/dispatcher.js"),
    Store = require("flux/utils").Store,
    Track = require('../util/track.js'),
    _currentTrack = null;

var TrackStore = new Store(AppDispatcher);

TrackStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case 'START_RECORDING':
      _currentTrack = new Track(payload.name);
      _currentTrack.startRecording();
      break;
    case 'STOP_RECORDING':
      var notes = payload.notes;
      TrackStore.stopRecording();
      TrackStore.__emitChange();
      break;
    case 'PLAY':
      TrackStore.play(payload.track);
      break;
  }

};

TrackStore.record = function(){
  TrackStore.addListener(_currentTrack.addNotes);
};

TrackStore.play = function (track) {
};

TrackStore.stopRecording = function () {
  _currentTrack.stopRecording();
};
