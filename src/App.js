import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // console.log("constructor")
    this.state = {
      todo: "",
      todoList: [
       {id: "1", todo: "Wash Dog"},
       {id: "2", todo: "Eat Food"},
       {id: "3", todo: "Teach Class"},
      ],
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }  

  componentDidMount() {
    console.log("Mounted");
    console.log(this.state.todoList);
  }

  componentDidUpdate() {
    console.log("updated",this.state.todoList);
  }

  handleChange = (event) => {
    //  console.log(event.target.value);
    this.setState({
       todo: event.target.value,
    });
    // console.log(this.state.todo);
  }

  

  handleClick = (event) => {
    const todo = this.state.todo;
    console.log(todo);

    this.setState({
      todoList: [...this.state.todoList,
         { id: String(this.state.todoList.length +1), todo},
        ],
      todo: "",
    });

  }

  // handleDelete = (index) => {
  //   var deleteList= [this.deleteItem(inde)]
    
  //   this.deleteItem({
  //      todoList = [...this.state.todoList],
  //       todoList.splice(index, 1),
  //      this.setState({todoList})
  //   });
  // }
  

  

  render(){
    // console.log("render")
    return (
     <div className="App">
       <section>
          <h1>Hello World</h1>
          <label 
          htmlFor="todos">TODOS:
          </label>
          <input 
          type="text" name="todos" 
          onChange={this.handleChange}
          value={this.state.todo}
          />
          <button 
          onClick={this.handleClick}>Submit
          </button>
          <button onClick={this.handleDelete}> Delete Item
          </button>
       </section>
       <ul>
          {this.state.todoList.map(({id, todo}, i ) => {
            return <li key={id}> {todo} </li>;
          })}
       </ul>
     </div>
    );
  }
}

export default App;