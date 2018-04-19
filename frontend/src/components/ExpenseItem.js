import React, { Component } from 'react';// eslint-disable-next-line
import '../App.css';// eslint-disable-next-line
import { Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class ExpensesItem extends Component {
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
    var style = {
      padding: 20,
      fontSize: 30
    };
    return (
        
    <tbody key={this.props.index}>    
      <tr>
          <td className='no'><button className='b btn btn-success' style={style}
                                      onClick={this.props.handleEdit.bind(this, 'edit')} value={this.props.exp.id}>Edit</button></td>
          <td><button onClick={this.props.handleEdit.bind(this, 'cat')} value={this.props.exp.category}
                      className="btn" style={style}>{this.props.exp.title}</button></td>
          <td>{this.props.exp.description}</td>
          <td>{this.props.exp.price}</td>
          <td>{this.state.category.name}</td>
          <td className='no'><button className='b btn btn-danger' style={style} value={this.props.exp.id}
                                      onClick={this.props.OnDelete.bind(this, 'main')}>Delete</button></td>
          
      </tr>
    </tbody>
    );
  }
}

export default ExpensesItem;