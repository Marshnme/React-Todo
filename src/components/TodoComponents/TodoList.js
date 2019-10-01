import React from 'react';
import Todo from "./Todo"
import styled from "styled-components"

// const ListDiv = styled.div`
//     display:flex;
//     align-items:center;
//     flex-flow:column
// `;
const TodoList = props =>{
    return(
        <div>
            {props.chores.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
        </div>
    )
}

export default TodoList