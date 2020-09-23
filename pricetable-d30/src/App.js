import React from 'react';
import header from './header.jpg'
import './App.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import capDrink from './cappuccino.png'
import mocha from './mocha.png'
import espresso from './espresso.png'
import madeleine from './madeleine.png'
import croissant from './croissant.png'



const imgHeaderStyle = {
  width:'50%',
  borderImageOutset: '10px'
};
const roundButton = {
  fontSize:"25px",
  paddingLeft:"15px",
  paddingRight:"15px",
  borderRadius:"50px"
};
const regButton = {
  fontSize:"25px",
  margin:"5px"
}



class App extends React.Component {
  state = {
    cartItems: 0
  };

  //function
  appendToOrder = (item) => {
    this.setState(
      prevState => ({cartItems: prevState.cartItems + 1})
    )
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card id="card">
            <Card.Header>
              <Card.Title><img src={header} style={imgHeaderStyle} alt="img"></img></Card.Title>
            </Card.Header>
            <Card.Body>
              <Table hover id="table">
                <thead>
                  <tr>
                    <th><img src={capDrink} style={{width:"75px"}} id="drink-img" alt="img"></img></th>
                    <th>cappuccino</th>
                    <th>$2.99</th>
                    <th><Button variant="outline-warning" style={roundButton} onClick={this.appendToOrder}>+</Button></th>
                  </tr>
                  <tr>
                    <th><img src={mocha} style={{width:"75px"}} id="drink-img" alt="img"></img></th>
                    <th>mocha</th>
                    <th>$3.25</th>
                    <th><Button variant="outline-warning" style={roundButton}  onClick={this.appendToOrder}>+</Button></th>
                  </tr>
                  <tr>
                    <th><img src={espresso} style={{width:"75px"}}  id="drink-img" alt="img"></img></th>
                    <th>espresso</th>
                    <th>$1.99</th>
                    <th><Button variant="outline-warning" style={roundButton}  onClick={this.appendToOrder}>+</Button></th>
                  </tr>
                  <tr>
                    <th><img src={madeleine} style={{width:"75px"}}  id="drink-img" alt="img"></img></th>
                    <th>madeleines <small>3 pcs</small></th>
                    <th>$0.99</th>
                    <th><Button variant="outline-warning" style={roundButton}  onClick={this.appendToOrder}>+</Button></th>
                  </tr>
                  <tr>
                    <th><img src={croissant} style={{width:"75px"}} id="drink-img" alt="img"></img></th>
                    <th>croissant</th>
                    <th>$1.99</th>
                    <th><Button variant="outline-warning" style={roundButton}  onClick={this.appendToOrder}>+</Button></th>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                    <span><Button variant="outline-warning" style={regButton}>Items in order: <small>{this.state.cartItems}</small></Button> <Button variant="outline-warning" style={regButton}>Payment Settings</Button></span>
                    </td>
                  </tr>
                </thead>
              </Table>
          </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}
export default App;
