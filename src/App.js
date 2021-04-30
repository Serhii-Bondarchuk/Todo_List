import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'
import { addTodo, addInput } from './redux/todosActions'



function App(props) {

    let [value, setValue] = useState('')

    const inputHandle = (e) => {

        setValue(() => {
            return e.target.value
        })
    }


    const inputPost = (e) => {
        e.preventDefault()
        props.addInput(value)
        setValue('')

    }


    return (
        <div className="wrapper">
         <h3> created by Serhii Bondarchuk </h3> 
         <br/>

        <h1> Todo List </h1>
       <span>
        <div className='item main'  style =  {{ display: 'flex',
         marginRight: '20px' }} >
        
        <form style = {{ display: 'flex',
    width: '100%' }} 
         action="" onSubmit = {inputPost } > 
        <input className = 'form-control '
         value = {value} 
         onChange = { inputHandle } 
         style= {{  }} type="text"/>{' '}
         <button type = 'submit'      
          className= 'btn btn-success ' style = {{ width: '38%' }} > Add New todo </button>
        </form> 
        </div>
         </span> 
        <TodoList todos = {props.todos}  />
    </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addInput: (value) => dispatch(addInput(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);