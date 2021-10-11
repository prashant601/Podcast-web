import React from "react";

class AddAlbum extends React.Component {
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
        <h2>Add Albums</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Details</label>
            <input
              type="text"
              name="email"
              placeholder="Details"
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

export default AddAlbum;
