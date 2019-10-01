import React from 'react';
import "./Todo.css"
import styled from "styled-components"

    const Large = styled.p`
        font-size:1.5rem;
    `;

    const Todo = props =>{
        return (
            <div 
            className={`item${props.item.completed ? ' completed' : ''}`} 
            onClick={() => props.toggleItem(props.item.id)}>
                <Large>{props.item.task}</Large>
            </div>
            
        )
    }


export default Todo