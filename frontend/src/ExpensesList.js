import React, { Component } from 'react';// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './ExpenseItem'// eslint-disable-next-line
import { Row, Col} from 'reactstrap'


class ExpensesList extends Component {
  constructor(){
    super();
    this.state= {
      'expenses': [],
      'category': []
    }
  }
  componentDidMount(){
    this.getItem();
    ///this.getCat();
  }
  getItem(){
    fetch('http://localhost:8000/api/expense/?format=json',{credentials: true})
      .then(results => results.json())
      .then(results => this.setState({'expenses': results}));
  }
  /*getCat(){
    fetch('http://localhost:8000/api/category/?format=json')
      .then(results => results.json())
      .then(results => this.setState({'category': results}));
  }*/
  render() {
    return (
      <div>
      <h1 className='App-header App '>Expenses List</h1>
      <table className='in App'>
        <thead  className='th'>
          <tr >
            <th >Expense</th>
            <th >Description</th> 
            <th >Sum</th>
            <th >Category</th>
          </tr>
        </thead>
          {this.state.expenses.map(function(exp, index){
              return (
                  <ExpenseItem exp={exp} key={index} />
            )
          })}
      </table>
      </div>
    );
  }
}

export default ExpensesList;