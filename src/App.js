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

  handleDelete = (id) => {
    let removeArr = [...this.state.todoList];
    console.log(id);
    removeArr.splice(id, 1);
    console.log(removeArr);
    this.setState({todoList: [...removeArr]});
    
  }
  

  

  render(){
    // console.log("render")
    return (
     <div className="App">
       <section>
          <h1>Game Plan fo Today</h1>
          <label 
          htmlFor="todos">TODOS:
          </label>
          <input 
          type="text" name="todos" 
          onChange={this.handleChange}
          value={this.state.todo}
          />
          <button
             onClick={this.handleClick}> Add
          </button>
       </section>
       <ul>
          {this.state.todoList.map(({id, todo}, i ) => {
            return <li key={id}> 
            {todo} 
            <button
             onClick={() => {this.handleDelete(i)}}> Delete
          </button>
          </li>;
           
          })}
       </ul>
     </div>
    );
  }
}

export default App;