import React, { Component } from 'react';// eslint-disable-next-line
import '../App.css';// eslint-disable-next-line
import { Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextInput from './TextInput'

class ExpensesItem extends Component {
  constructor(props, context){
        super(props, context);
        this.state= {
          expense: [],
        }
        this.handleChange = this.handleChange.bind(this);
      }
  componentDidMount(){
        this.getExp();
      }
  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    const exp = this.state.expense;
    exp[name] = value;
    this.setState({'expense': exp});
  }
  getExp(){
    let expID = this.props.id;
        fetch('http://localhost:8000/api/expense/'+expID+'/?format=json',{credentials: true})
          .then(results => results.json())
          .then(results => this.setState({'expense': results}));
      }
       
  render() {
   
    return (
      <div className="App edit">
      <form>
        <TextInput
          name="title"
          label="Title"
          value={this.state.expense.title}
          onChange={this.handleChange}/>

        <TextInput
          name="discription"
          label="Description"
          value={this.state.expense.discription}
          onChange={this.handleChange}/>

        <TextInput
          name="comment"
          label="Comment"
          value={this.state.expense.comment}
          onChange={this.handleChange}/>

        <TextInput
          name="summ"
          label="Sum"
          value={this.state.expense.summ}
          onChange={this.handleChange}/>

        <input
          type="submit"
          value="Submit"
          ///disabled={this.props.saving}
          className="btn btn-primary"
          ///onClick={this.props.onSave}
          onChange={this.handleChange} 
          />
      </form>
    </div>
    );
  }
}

export default ExpensesItem;