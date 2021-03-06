import { Component } from 'react';
import style from './style.css';

export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: Date.now(),
      count: 10
    }
  }

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime.bind(this), 1000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update the current time
  updateTime() {
    this.setState({ time: Date.now() });
  };

  increment() {
    this.setState({ count: this.state.count + 1 });
  };

  // Note: `user` comes from the URL, courtesy of our router
  render() {
    const user = this.props.params.user;
    const time = this.state.time;
    const count = this.state.count;
    return (
      <div class={style.profile}>
        <h1>Profile: {user}</h1>
        <p>This is the user profile for a user named {user}.</p>

        <div>Current time: {new Date(time).toLocaleString()}</div>

        <p>
          <button onClick={this.increment.bind(this)}>Click Me</button>
          {' '}
          Clicked {count} times.
				</p>
      </div>
    );
  }
}
