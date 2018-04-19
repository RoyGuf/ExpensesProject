import React, { Component } from 'react';// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';// eslint-disable-next-line
import { Row, Col} from 'reactstrap'
import ExpensesList from './components/ExpensesList'
import ExpensesListByCat from './components/ExpensesListByCat'
import ExpenseEdit from './components/ExpenseEdit'

class App extends Component {
  constructor(props){
        super(props);
        this.state= {
          page: 'main',
          id: "",
          data: [],
          expenses: [],
        }
        this.OnSave = this.OnSave.bind(this);
      }
  componentDidMount(){
    this.getItem();
    this.setState({page: 'main'})
  }
  getItem(){
    fetch('http://localhost:8000/api/expense/?format=json',{credentials: true})
      .then(results => results.json())
      .then(results => this.setState({'expenses': results}));
  }
  handleEdit(page, e){
    console.log(e.target.value)
    e.preventDefault()
    this.setState({page: page, id: e.target.value})
  }
  OnSave(data, event) {
    event.preventDefault();
    this.expPut(data);
    this.getItem();
    this.setState({page: 'main'}) 
  }
  OnDelete(data, event) {
    console.log(event.target.value)
    event.preventDefault();
    this.expDelete(event.target.value);
    this.getItem();
  }
  expDelete(id){
    fetch('http://localhost:8000/api/expense/'+parseInt(id, 10)+'/?format=json',{
        method: 'DELETE',
        credentials: true
    })
    this.getItem();
  }
  expPut(data){
    var id = this.state.id;
      fetch('http://localhost:8000/api/expense/'+parseInt(id, 10)+'/?format=json',{
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',          
      },
        body: data,
        credentials: true
    
  })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
      
  render() {
    return (
        <div>
            {this.state.page === 'main' ? <ExpensesList page={this.state.page} handleEdit={this.handleEdit.bind(this)} OnDelete={this.OnDelete.bind(this)} expenses={this.state.expenses}/> :
            this.state.page === 'cat' ? <ExpensesListByCat id={this.state.id} page={this.state.page} handleEdit={this.handleEdit.bind(this)}/> :
            this.state.page === 'edit' ? <ExpenseEdit id={this.state.id} page={this.state.page} handleEdit={this.handleEdit.bind(this)} OnSave={this.OnSave}
                                                      expDelete={this.expDelete}/> :  null}
        </div>
    );
  }
}

export default App;