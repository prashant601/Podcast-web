import React from "react";

class EditAuthor extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, albums, audios} = props.location.state.author;
    this.state = {
      id,
      name,
      email,
      albums,
      audios
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateAuthorHandler(this.state);
    this.setState({ name: "", email: ""  });
    this.props.history.push("/Authors");
  };
  render() {
    return (
      <div className="ui main form_container">
        <h2>Edit Author</h2>
        <form className="ui form" onSubmit={this.update}>
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
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button purple">Update</button>
        </form>
      </div>
    );
  }
}

export default EditAuthor;
