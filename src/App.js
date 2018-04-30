import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddRecipie from './components/AddRecipie';
import RecipieShow from './components/RecipieShow';
import { connect } from 'react-redux';

class App extends Component {

  renderIngs = () => {
	const ings = this.props.ings.map((ing) => {
		return (
			<div>
			
			</div>
		)
	})

	return ings;	
  }

  render() {
    return ( 
	<div className="container">
		<center><h1>Recipie Box</h1></center><br/>
		<hr/>
		<br/>
		<RecipieShow />
		<AddRecipie />
	</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		name: state.name,
		ings: state.ingredients
	}
}

export default connect(mapStateToProps)(App);
