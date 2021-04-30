import React from 'react'
import TodoItem from './TodoItem'


function TodoList(props) {
   
    return (
          <div>
             {
             	props.todos.map( (el,index ) => {
             		return (
                         <TodoItem key = {el.id} el = { el } index = {index}  />
             			)
             	} )
             } 

          </div> 
    	) 
}

export default TodoList
