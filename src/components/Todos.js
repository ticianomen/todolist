import React from 'react'
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import {GoPlus} from "react-icons/go"
import { motion } from 'framer-motion';
const mapStatesToProps= (state) => {
    return{
        todos:state,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo: (obj)=> dispatch(addTodos(obj)),
    }
}

const Todos = (props) =>{
const [todo, setTodo] = React.useState("");

const handleChange=(e)=>{
    setTodo(e.target.value)
}

const add = () => {
    if(todo === ""){
        alert("Input is Empty");
    } else{
        props.addTodo({
            id:Math.floor(Math.random()*1000),
            item:todo,
            completed:false
            })
            setTodo("");
    }
}
const onKeyUp=(ev)=>{
    if(ev.key === "Enter"){
        add()
    }
}

    return (
        <div className='addTodos'>
        <input 
        type='text' 
        onKeyPress={(ev)=>onKeyUp(ev)}
        onChange={(e) => handleChange(e)} 
        className='todo-input'
        value={todo}
        />
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className="add-btn" 
        type= "submit"
        onClick={()=>add()}><GoPlus/></motion.button>
        <br/>

        </div>
    )
}

export default connect(mapStatesToProps,mapDispatchToProps)(Todos);
