import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1, text : "Hello World"}]
}


export const todoSlice = createSlice({

    // we write all the properties in it.

    name : 'todo', // name is a property in redux (not given ainvai)
    initialState, // we could also create initial state here.
    reducers : {
        addTodo : (state, action) => { // addTodo is a property .. syntax : addTodo : (state, action) => {}
            const todo = {
                id : nanoid(), 
                text : action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => { // property
            state.todos = state.todos.filter(
                (todo) => todo.id != action.payload
            )
        }, 

    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

