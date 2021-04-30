import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { delTodo, checkTodo, atribute } from '../redux/todosActions'



function TodoItem(props) {

    useEffect(() => {
        props.atribute(props.el, props.index)
    }, [props.todos.lenght])

    const delHandle = () => {
        props.delTodo(props.el.id, props.index)
    }


    return (
        <div className = 'item s'  > { ' '}       

         <label  htmlFor={`sId` +  props.index}>
<input   
  onClick = { () => props.checkTodo(props.el, props.index)  }
 id ={`sId`+ props.index}

 type="checkBox"  /> {' '}
         
         &nbsp;&nbsp;
          {
          	props.index + 1
          }         
           &nbsp;&nbsp;
         <span>
         {
         	props.el.task
         }
         </span>
         </label>

   <span> <button className ='btn btn-danger ' style = {{
         borderRadius: '50%', height: '25px', width: '25px', padding: '0'    }}
         onClick = { () =>  delHandle() }
         > x  </button></span>

      </div>

    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,


    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        delTodo: (id, index) => dispatch(delTodo(id, index)),
        checkTodo: (id, index) => dispatch(checkTodo(id, index)),
        atribute: (id, index) => dispatch(atribute(id, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);