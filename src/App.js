import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';



class App extends Component {
	constructor() {
		super();
		this.state = {robots : [], searchField: ''}
	}
	
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
		
	}
	render() {
		const filterRobot = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})

		if(this.state.robots.length === 0){
			return <h1 className="tc ma4 f2"> Loading... </h1>
		} else {
			return (
			<div className='tc'>
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filterRobot} />
			</div>
		)
		}
	}
}

export default App;