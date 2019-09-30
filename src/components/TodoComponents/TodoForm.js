import React from 'react';




    class TodoForm extends React.Component {
        constructor(){
            super();
            this.state = {
                item:""
            }
        }

        handleChanges = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        render(){
        return(
            
            <form>
                <input type="text" value={this.item}></input>
                <button type="submit">Add Task</button>
                <button type="submit">Clear Completed</button>
            </form>
            
        )
    }
}
    export default TodoForm