import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		const name = 'John Doe';
		const loading = false;
		const showName = false;

		return (
			<div className="App">
				{loading ? <h4>Loading...</h4> : <h1>Hello from React {showName ? name : null}</h1>}

				<div>Hello React my name is satake Yusuke 祐亮 Yusuke</div>
				<label htmlFor="name">name</label>
			</div>
		);
	}
}

export default App;
