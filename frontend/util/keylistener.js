var MAPPING = require('../constants/mapping');
var KeyActions = require('../actions/keyactions');
var _$clicked;

var keypress = $(document).keydown(function(e){
  var note = MAPPING[e.which];
  if (note) {
    KeyActions.playNote(note);
    var noteID = "#" + note;
    $(noteID).addClass("pressed");
  }
});

var keyup = $(document).keyup(function(e){
  var note = MAPPING[e.which];
  if (note) {
    KeyActions.stopNote(note);
    var noteID = "#" + note;
    $(noteID).removeClass("pressed");
  }
});

// var click = $(document).mousedown(function(e){
//   var target = e.target;
//   _$clicked = $(target);
//   if (target.className.indexOf("key") !== -1) {
//     KeyActions.playNote(target.id);
//     _$clicked.addClass("pressed");
//   }
// });
//
// var release = $(document).mouseup(function(e){
//   var target = _$clicked[0];
//   if (target && target.className.indexOf("key") !== -1) {
//     KeyActions.stopNote(target.id);
//     _$clicked.removeClass("pressed");
//   }
// });

module.exports = {keypress: keypress, keyup: keyup};
