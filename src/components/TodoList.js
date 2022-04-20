import React, { Component } from 'react'
import Todo from './Todo';
import TodoInput from './TodoInput';

class Todolist (props) {
    const handleChange = (event) => {
   props.setTodo
        
    
        this.state = {
          todo: '',
          todos: [
            {id:"1", todo: "wash dog" },
            {id:"2", todo: "eat food"},
            {id:"3", todo: "teach class"},
          ],
        };
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick + thishandleClick.bind(this);
      }
    
      componentDidMount() {
        console.log("Mounted");
        console.log(this.state.todos);
      }
    
      componentDidUpdate() {
        console.log("Updated", this.state.todos)
      }
    
    
      handleChange = (event) =>  {
        // console.log(event.target.value);
        console.log(this);
        this.setState({
           todo: event.target.value,
        });
        
      }
    
      handleClick = (event) => {
        const todo = this.state.todo;
        console.log(todo);
        this.setState({
        todos: [...this.state.todos, todo],
        todo: "",
      });
      }
    
      render() {
        return (
         <div className="App">
          <TodoInput handleChange={this.handleChange} handleClick={this.handleClick} todo={this.state.todo}/>

            <ul>
              {this.state.todos.map((todo, index) => {
            
                return <Todo todo={todo} />;
              })}
            </ul>
         </div>
        );
      }
    }
export default Todolist;
