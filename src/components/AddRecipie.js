import React, { Component } from 'react';

class AddRecipie extends Component {

	state = {
		name: '',
		ingredients: null
	}

	onSubmit = (event) => {
		event.preventDefault()
		
		let ings = this.refs.ingredients.value.split(',');

		this.setState({ name: this.refs.name.value, ingredients: ings })
		console.log(this.state)
	}	

	render () {
		return (
		<div>
			<button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
			  Add recipie
			</button>

			<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
				<h5 className="modal-title" id="exampleModalCenterTitle">Add Recipie</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			      </div>
			      <div className="modal-body">
				<form className="form" onSubmit={this.onSubmit}>
					<label className="label">Recipie name</label><br/>
					<input className="form-control" ref="name" placeholder="Enter the recipie name"/><br/><hr/><br/>
					<label className="label">Enter the Ingredients</label><br/>
					<input className="form-control" ref="ingredients" placeholder="Enter the ingredients separated by comma(,)" /><br/><br/>
					<button type="submit" className="btn btn-primary">ADD</button>
				</form>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
		)
	}
};

export default AddRecipie;
