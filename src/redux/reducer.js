import {createSlice} from "@reduxjs/toolkit"

const initialState=[];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers:{
//ADD TODO
    addTodos:(state,action) => {
        state.push(action.payload);
        return state;
        },
//REMOVE TODO
    removeTodos:(state,action)=>{
    return state.filter(item=> item.id !== action.payload)
    },
    //UPDATE TODO
    updateTodos: (state,action) => {
        return state.map(todo=>{
            if(todo.id === action.payload.id){
                return {
                    ...todo,
                    item: action.payload.item,
                }
            }
            
            return todo;
        })
    },
    //COMPLETED TODO
    completeTodos: (state,action) =>{
        return state.map((todo)=>{
            if(todo.id=== action.payload){
            return {
            ...todo,
            completed: true,
            }
        }
        return todo;
    });
    }
    }
})


export const {addTodos , removeTodos , updateTodos , completeTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;