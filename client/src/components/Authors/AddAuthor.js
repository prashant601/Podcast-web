import React from "react";

class AddAuthor extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    this.props.addAuthorHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/Authors");
  };
  render() {
    return (
      <div className="ui main form_container">
        <h2>Add Students</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name of Student
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          
          <button className="ui button purple">Add</button>
        </form>
      </div>
    );
  }
}

export default AddAuthor;
