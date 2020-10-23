import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Note from './Note';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
//run yarn start

class App extends React.Component {

  //initally render 3 to do note components
  constructor() {
    super();
    this.state = {
      numChildren : 3,
      items : [<Note onDelete={this.handleDelete} key={1} id={1001}></Note>,
              <Note onDelete={this.handleDelete} key={2} id={1002}></Note>,
              <Note onDelete={this.handleDelete} key={3} id={1003}></Note>]
    }
  }
  //event on click
  createNewTodo = () => {
    this.setState({
      numChildren : this.state.numChildren += 1
    })
    //append a new to do component and set state for items
    const list = this.state.items;
    list.push(<Note onDelete={this.handleDelete} key={this.state.numChildren} id={1000 + this.state.numChildren}></Note>);
    this.setState({items : list});
  }

  handleDelete = (itemId) => {
    const list = this.state.items;
    var indexToRemove = 0;
    for(var i = 0; i < this.state.items.length; i+=1){
      //grab just id from props
      var element = this.state.items[i].props.id;
      
      if(element === itemId) {
        indexToRemove = i;
        break;
      }
    }
    //splice
    list.splice(indexToRemove, 1);
    
    //setstate for list and numChildren
    this.setState({items : list});

    this.setState({
      numChildren : this.state.numChildren -= 1,
    })
  }

  render() {

    //store a list of to-do note components to render
    //js functions can also be written here
    
    return (
      <div className="App">
        <header className="App-header">
          {/* card component, title/header should be to-do app 
          have a floating plus button at the bottom right
          each new to-do component is a card containing a check box,
          text input (200 chars limit), and an 'x' button to delete it*/}
          <Card id="card">
            <Card.Header id="cardTitle">
              <Card.Title>To-do list App<Fab color="primary" aria-label="add" id="addNote" onClick={this.createNewTodo}>+</Fab></Card.Title>
            </Card.Header>
            <Card.Body id="parentNode">
              {this.state.items}
            </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
