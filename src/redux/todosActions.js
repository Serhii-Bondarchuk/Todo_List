import {CHECK_TODO, DELETE_TODO, ATRIBUTE, ADD_INPUT} from './todosTypes'

export const checkTodo = (id, index) => {
	return {
		type : CHECK_TODO,
		payload: id,
		payload2: index
	}
}

export const delTodo = (id, index) => {
	return {
		type: DELETE_TODO, 
		payload: id,
		payload2: index
	}
}

export const atribute = (id, index) => {
	return {
		type: ATRIBUTE,
		payload: id, 
		payload2: index
	}
}

export const addInput = (value) => {
	 return {
	 	type: ADD_INPUT,
	 	payload: value   
	 }
}