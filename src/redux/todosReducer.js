import { CHECK_TODO, DELETE_TODO, ATRIBUTE, ADD_INPUT } from './todosTypes'


const initialState = {
    todos: [{
            id: Date.now(),
            task: 'First task',
            checked: true
        },
        { id: Date.now() + 1, task: 'Second task', checked: false }

    ]
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHECK_TODO:

            return {

                ...state,

                todos: state.todos.map((el, index) => {


                    if (index == action.payload2) {
                        el.checked = !el.checked

                        const check = document.getElementsByClassName('s')

                        if (el.checked) {
                            check[action.payload2].classList.add('line')
                        } else {
                            check[action.payload2].classList.remove('line')
                        }

                    }

                    return el
                })

            }


        case ADD_INPUT:
            return {
                ...state,
                todos: state.todos.concat({
                    id: Date.now(),
                    task: action.payload,
                    checked: false
                })
            }


        case ATRIBUTE:



            return {
                ...state,


                todos: state.todos.map((el, index) => {

                    if (el.checked == true) {
                        const sId = 'sId' + index
                        const checkId = document.getElementById(sId)
                        checkId.setAttribute('checked', 'checked');
                        const check = document.getElementsByClassName('s')
                        check[index].classList.add('line')
                    }

                    return el
                })

            }


        case DELETE_TODO:
            return {

                ...state,
                todos: state.todos.filter((el, index) => {
                    return el.id != action.payload
                }).map((el, index) => {

                    if (el.checked == true) {

                        const check = document.getElementsByClassName('s')

                        check[0].classList.add('line')

                    }

                    return el
                })

            }
        default:
            return state
    }
}