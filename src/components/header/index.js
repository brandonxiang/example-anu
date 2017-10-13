const { Component } = require('react');
const { Link } = require('react-router');
const style = require('./style.css');

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <header class={style.header}>
          <h1>Anu App</h1>
          <nav>
          <Link activeClassName={style.active} to="/home">Home</Link>
          <Link activeClassName={style.active} to="/profile/me">Me</Link>
          <Link activeClassName={style.active} to="/profile/brandon">Brandon</Link> 
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Home;
