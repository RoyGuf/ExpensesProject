import React, { Component } from 'react';// eslint-disable-next-line
import '../App.css';
import ExpenseItem from './ExpenseItem'// eslint-disable-next-line
import { Row, Col} from 'reactstrap'


class ExpensesList extends Component {
  constructor(props){
    super(props);
    this.handleEdit = this.props.handleEdit;
    this.expDelete = this.props.expDelete;
    this.state= {
      'expenses': this.props.expenses,
      'category': [],
    }
  }
  componentDidMount(){}
  
  render() {
    var expenses = this. state.expenses;
    var handleEdit = this.props.handleEdit;
    var OnDelete = this.props.OnDelete;
    return (
      <div>
      <h1 className='App-header App '>Expenses List</h1>
      <table className='in App borderless'>
        <thead  className='th'>
          <tr >
            <th ></th>
            <th >Expense</th>
            <th >Description</th> 
            <th >Sum</th>
            <th >Category</th>
          </tr>
        </thead>
          {this.props.expenses.map(function(exp, index){
              return (
                  <ExpenseItem exp={exp} key={index} handleEdit={handleEdit.bind(this)} OnDelete={OnDelete.bind(this)}/>
            )
          })}
      </table>
      </div>
    );
  }
}

export default ExpensesList;