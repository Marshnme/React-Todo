import React from 'react';
import styled from "styled-components"

    const FormParent = styled.form`
        display:flex;
        flex-direction:column;
        width:30vw;
    `;

    const InputChild = styled.input`
        margin-bottom:5%;
        display:flex;
    `;

    const ButtonS = styled.div`
        margin-bottom:5%;
        display:flex;
        justify-content:center;
    `;
    class TodoForm extends React.Component {
        constructor(){
            super();
            this.state = {
                item: ""
                
            };
        }

        handleChanges = e => {
            this.setState({
                [e.target.name]: e.target.value
                
            });
            console.log(e.target.value)
        };

        submitItem = e => {
            e.preventDefault();
            this.props.addItems(this.state.chore);
            
        };




        render(){                           
        return(
            
            <FormParent onSubmit={this.submitItem}>
                <InputChild placeholder="Add Task"type="text" value={this.item} name="chore" onChange={this.handleChanges}/>
                <ButtonS>
                    <button type="submit">Add Task</button>
                    <button onClick={this.props.clear}>Clear Completed</button>
                </ButtonS>
            </FormParent>
            
        )
    }
}
    export default TodoForm;