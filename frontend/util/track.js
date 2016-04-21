

var Track = function (name, roll) {
  this.name = name;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.time = new Date;
};

Track.prototype.addNotes = function(note) {
  var timeSlice = new Date - this.time;
  this.roll.push({note: note, startTime: timeSlice});
};

Track.prototype.removeNotes = function(note) {
  var timeSlice = new Date - this.time;
  // this.roll
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

// Track.__onDispatch = function(payload){
//
//   switch(payload.actionType){
//     case 'START_RECORDING':
//       var note = payload.note;
//       break;
//     case 'STOP_RECORDING':
//       note = payload.note;
//       break;
//   }
//
// };

module.exports = Track;
