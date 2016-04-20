var React = require('react');

var OrganKey = React.createClass({
  getInitialState: function(){
    return {sharp: false, cname: "key"};
  },
  componentDidMount: function(){
    if (this.props.note.indexOf("s") !== -1) {
      this.setState({sharp: true});
    }
  },
  keyPress: function(){
    // this.setState({cname: })
  },
  keyUp: function(){

  },
  render: function(){
    if (this.state.sharp) {
      this.state.cname += " sharp";
    }
    return (
      <li
        id={this.props.note}
        className={this.state.cname}
      > &nbsp; </li>
    );
  }
});




module.exports = OrganKey;
