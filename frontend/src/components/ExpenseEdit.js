import React, { Component } from 'react';// eslint-disable-next-line
import '../App.css';// eslint-disable-next-line
import { Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextInput from './TextInput'

class ExpensesEdit extends Component {
  constructor(props, context){
        super(props, context);
        this.state= {
          expense: [],
          category: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.expPut = this.expPut;
      }
  componentDidMount(){
        this.getExp();
        this.getCat();
      }
  getExp(){
    var id = this.props.id;
    fetch('http://localhost:8000/api/expense/'+id+'/?format=json',{credentials: true})
      .then(results => results.json())
      .then(results => this.setState({'expense': results}));
  }
  getCat(){
        fetch('http://localhost:8000/api/category/?format=json',{credentials: true})
          .then(results => results.json())
          .then(results => this.setState({'category': results}));
      }
  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    const exp = this.state.expense;
    exp[name] = value;
    this.setState({expense: exp});
  }
       
  render() {
    var data = JSON.stringify(this.state.expense);
    var style = {
      backgroundColor: 'naivyBlue'
    }
    return (
      <div className="edit" style={style}>
      <h1>Edit {this.state.expense.title} Expense</h1>
      <hr />
      <form>
        <TextInput
          name="title"
          label="Title"
          value={this.state.expense.title || ''}
          onChange={this.handleChange}/>

        <TextInput
          name="discription"
          label="Description"
          value={this.state.expense.description || ''}
          onChange={this.handleChange}/>

        <TextInput
          name="comment"
          label="Comment"
          value={this.state.expense.comment || ''}
          onChange={this.handleChange}/>

        <TextInput
          name="price"
          label="Sum"
          value={this.state.expense.price || ''}
          onChange={this.handleChange}/>
        <div className="form-group">
         <label htmlFor='Category' className="form-head">Category</label>
         <div className="col-lg-6 ">
           <select className='form-control' name='categoey'
                  onChange={this.handleChange}>
                  <option value='' key='0'>---</option>
                  {this.state.category.map(function(X, index) {
              return (<option  key={index} value={index} >{X.name}</option>);
                        })}
           </select>
         </div>
        </div>
        <input
          type="submit"
          value="Save"
          ///disabled={this.props.saving}
          className="btn btn-primary"
          onClick={this.props.OnSave.bind(this, data)}
          ///onChange={this.handleChange} 
          />
      </form>
    </div>
    );
  }
}

export default ExpensesEdit;