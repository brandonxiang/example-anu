import { Component } from 'react';
import style from './style.css'

export default class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
    );
  }
}
