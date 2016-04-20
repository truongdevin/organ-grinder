// Dispatcher = require('./dispatcher/Dispatcher.js');
// Note = require('./util/note.js');
// TONES = require('./constants/tones.js');
var React = require('react'),
    ReactDOM = require('react-dom'),
    keydown = require('./util/keylistener')["keydown"],
    keyup = require('./util/keylistener')["keyup"],
    OrganPlayer = require('./components/organplayer');


document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <OrganPlayer />,
    document.getElementById('root')
  );
}, false);
