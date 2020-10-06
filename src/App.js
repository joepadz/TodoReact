import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import Addtodo from './components/Addtodo';

class App extends Component {
  state ={
    todos:[
      {
        id:1,
        title:'take out for breakfast',
        completed:true
      },
      {
        id:2,
        title:'take out for lunch',
        completed:false
      },
      {
        id:3,
        title:'take out for dinner',
        completed:false
      },
  ]
  }

  //Toggle complete
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
      !== id)]})
  }

  addTodo = (title) => {
    const newTodo  ={
      id:4,
      title: title,
      completed:false 
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }



  render() {
      return (
           
            <div className="App">
              <div className ="container"> 
                <Header />
                <Addtodo addTodo={this.addTodo}/>
                <h1>hello world sample!</h1>
                <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}  />
              </div>
            </div>
        );
    }
}

export default App;
