import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
    age: '',
  }

  state = this.initialState
  
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name] : value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  
  render() {
    const { name, job, age} = this.state; 

    return (
        <form onSubmit={this.onFormSubmit}>
            <label for="name">Name</label>
            <input 
                style={{width: "300px"}}
                type="text" 
                name="name" 
                id="name"
                value={name} 
                onChange={this.handleChange} />
            <label for="job">Job</label>
            <input 
                style={{width: "300px"}}
                type="text" 
                name="job" 
                id="job"
                value={job} 
                onChange={this.handleChange} />
            <label for="age">Age</label>
            <input 
                style={{width: "300px"}}
                type="number" 
                name="age" 
                id="age"
                value={age} 
                onChange={this.handleChange} />                
            <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
    );
  }
}

export default Form

