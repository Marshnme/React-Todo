import React from 'react';




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
            
            <form onSubmit={this.submitItem}>
                <input type="text" value={this.item} name="chore" onChange={this.handleChanges}/>
                <button type="submit">Add Task</button>
                <button onClick={this.props.clear}>Clear Completed</button>
            </form>
            
        )
    }
}
    export default TodoForm;