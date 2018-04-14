import React, { Component } from 'react';// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';// eslint-disable-next-line
import { Row, Col} from 'reactstrap'

class ExpensesItem extends Component {
    constructor(){
        super();
        this.state= {
          'category': []
        }
      }
    componentDidMount(){
        this.getCat();
      }
    getCat(){
        fetch('http://localhost:8000/api/category/?format=json',{credentials: true})
          .then(results => results.json())
          .then(results => this.setState({'category': results}));
    }
      
  render() {
    return (
        
    <tbody key={this.props.index}>
    
        
      <tr>
          <td>{this.props.exp.title}</td>
          <td>{this.props.exp.discription}</td>
          <td>{this.props.exp.summ}</td>
          <td>{this.state.category.data}</td>
          
      </tr>
   
    </tbody>
    );
  }
}

export default ExpensesItem;