import React ,{Component} from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";


export default class Login extends Component {

  constructor(props) {
    super(props);
    let loggedIn =false
    this.state= {
      username: '',
      password: '',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(e){
    e.preventDefault()
    const{ email, password }= this.state
    //login magic
    if(email==="test@gmail.com" && password==="huehue"){
      localStorage.setItem("token","asdfghjmnxzasdjklgfds")
      this.setState({
        loggedIn: true
      })
    }
    else{
      alert("Invalid credentials")
    }

  }

  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    if(this.state.loggedIn){
      return <Redirect to="/"/>
    }
   
  return (
      <div className=" my-3 ">
      <Form className="form_container" onSubmit={this.submitForm}>
        <h2 className="form_heading fs-3 text-primary fw-bold">Login</h2>
        

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="my-2 fw-bold fs-5">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="my-2 fw-bold fs-5">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </Form.Group>

        <Button variant="success" className="my-3 " type="submit">
          Submit
        </Button>

      </Form>
      </div>
  );
   
  }
};


