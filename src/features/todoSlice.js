import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        removeToDo: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        clearToDos: () => {
            return { items: [] }
        }
    }
})

export const { addTodo, removeToDo, clearToDos } = todoSlice.actions

export default todoSlice.reducer