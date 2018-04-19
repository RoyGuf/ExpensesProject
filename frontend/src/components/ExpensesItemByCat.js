import React, { Component } from 'react';// eslint-disable-next-line
import '../App.css';// eslint-disable-next-line
import { Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class ExpensesItemByCat extends Component {
    constructor(){
        super();
        this.state= {
          'category': [],
        }
      }
    componentDidMount(){
        this.getCat();
      }
    getCat(){
      let catID = this.props.exp.category;
        fetch('http://localhost:8000/api/category/'+catID+'/?format=json',{credentials: true})
          .then(results => results.json())
          .then(results => this.setState({'category': results}));
      }
       
  render() {
    return (
    <tbody key={this.props.index}>
      <tr>
          <td>{this.props.exp.title}</td>
          <td>{this.props.exp.description}</td>
          <td>{this.props.exp.date}</td>
          <td>{this.props.exp.comment}</td>
          <td>{this.props.exp.price}</td>
      </tr>
    </tbody>
    );
  }
}

export default ExpensesItemByCat;