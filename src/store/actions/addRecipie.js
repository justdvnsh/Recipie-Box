import * as actionTypes from './actionTypes';

export const add = (name, ingredients) => {
	return {
		type: actionTypes.ADD,
		name: name,
		ings: ingredients
	}
}
