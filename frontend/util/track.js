

var Track = function (name, roll) {
  this.name = name;
  this.roll = roll;
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

module.exports = Track;
