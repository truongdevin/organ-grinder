var MAPPING = require('../constants/mapping');
var KeyActions = require('../actions/keyactions');

var keypress = $(document).keydown(function(e){
  var note = MAPPING[e.which];
  KeyActions.playNote(note);
  var noteID = "#" + note;
  $(noteID).addClass("pressed");
});

var keyup = $(document).keyup(function(e){
  var note = MAPPING[e.which];
  KeyActions.stopNote(note);
  var noteID = "#" + note;
  $(noteID).removeClass("pressed");
});


module.exports = {keypress: keypress, keyup: keyup};
