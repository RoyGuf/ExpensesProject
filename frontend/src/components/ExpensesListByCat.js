import React, { Component } from 'react';// eslint-disable-next-line
import '../App.css';
import ExpensesItemByCat from './ExpensesItemByCat'// eslint-disable-next-line
import { Row, Col} from 'reactstrap'


class ExpensesListByCat extends Component {
  constructor(){
    super();
    this.state= {
      'expenses': [],
      'category': [],
      'cat': 'kaka',
    }
  }
  componentDidMount(){
    this.getItem();
    this.getCat();
  }
  getItem(){
    var expenses = [];
    var id = this.props.id;
    fetch('http://localhost:8000/api/expense/?format=json',{credentials: true})
      .then(results => results.json())
      .then(results => results.forEach(element => {
        if(parseInt(element.category, 10) === parseInt(id, 10)){
          expenses.push(element);
          this.setState({'expenses': expenses})
        }
        this.setState({'expenses': expenses})
      }))
      
  }
  getCat(){
    var id = this.props.id;
      fetch('http://localhost:8000/api/category/'+id+'/?format=json',{credentials: true})
        .then(results => results.json())
        .then(results => this.setState({'category': results}));
    }
  render() {
    var style = {
      padding: 20,
      fontSize: 30,
    };
    return (
      <div>
      <h1 className='App-header App '>Expenses List</h1>
      <h2 className=' App '><u>Expenses In <b>{this.state.category.name}</b> Category </u></h2>
      <table className='in App borderless'>
        <thead  className='th'>
          <tr >
            <th >Expense</th>
            <th >Description</th>
            <th >Date</th> 
            <th >Comment</th>
            <th >Sum</th>
          </tr>
        </thead>
          {this.state.expenses.map(function(exp, index){
              return (
                  <ExpensesItemByCat exp={exp} key={index} />
            )
          })}
      </table>
      <div className="App">
        <button className="btn btn-primary" style={style} onClick={this.props.handleEdit.bind(this, 'main')} value={this.state.cat}>Back</button>
      </div>
      </div>
    );
  }
}

export default ExpensesListByCat;