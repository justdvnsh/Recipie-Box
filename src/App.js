import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddRecipie from './components/AddRecipie';

import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class App extends Component {
  render() {
    return ( 
	<div className="container">
		<center><h1>Recipie Box</h1></center><br/>
		<hr/>
		<br/>
		<Card>
    			<CardBody>
			<CardTitle>Recipie Name</CardTitle><br/><hr/><br/>
        		<button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
	            		Show Ingredients
			</button><br/><br/>
			<div className="collapse" id="collapseExample">
  				<div className="card card-body">
				    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  				</div>
			</div>
    			</CardBody>
		</Card><br/><br/>
		<AddRecipie />
	</div>
    );
  }
}

export default App;
