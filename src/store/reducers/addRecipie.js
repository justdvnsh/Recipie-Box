import * as actionTypes from '../actions/actionTypes';

const intialState = {
	name: '',
	ingredients: []
}

const reducer = ( state = intialState, action ) => {
	switch(action.type){
		case actionTypes.ADD:
			return {
				...state,
				name: action.name,
				ingredients: action.ings
			}
	}
	return state;
};

export default reducer;
