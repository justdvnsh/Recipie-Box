import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class RecipieShow extends Component {
	render() {
		return (
			<div>
				<Card>
		    			<CardBody>
					<CardTitle>{ this.props.name }</CardTitle><br/><hr/><br/>
					<button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
				    		Show Ingredients
					</button><br/><br/>
		  			<div className="collapse" id="collapseExample">
						{this.props.ings.map((ing) => {
							return (
								<div className="card card-body">
									{ing}					   
			  					</div>
							)
						})}
					</div>
		    			</CardBody>
				</Card><br/><br/>
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		name: state.name,
		ings: state.ingredients
	}
}

export default connect(mapStateToProps)(RecipieShow);