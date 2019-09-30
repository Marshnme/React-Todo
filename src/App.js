import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

const taskData=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor(){
  super();
  this.state = {
    chores: taskData
  }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addItem = itemName =>{
    const newItem = {
      name:itemName,
      id:Date.now(),
      purchased:false
    };
    this.setState({
      chores: [...this.state.chores, newItem]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList chores={this.state.chores}/>
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
