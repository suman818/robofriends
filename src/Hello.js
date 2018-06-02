import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
	render(){
		return (
			<div>
				<h1 className="f1 tc">Hello World</h1>
				<p> Welcome Ninja Warrior</p>
				<div>
					<h3> Here is the List of Dead People</h3>
					<ul>
						<li>Jon</li>
						<li>Cash</li>
						<li>Bob</li>
					</ul>
				</div>
			</div>

		);
	}
}
export default Hello;