import React from "react";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorCard";

const AuthorList = (props) => {
  console.log(props);

  const deleteAuthorHandler = (id) => {
    props.getAuthorId(id);
  };

  const renderAuthorList = props.authors.map((author) => {
    return (
      <AuthorCard
        author={author}
        clickHander={deleteAuthorHandler}
        key={author.id}
      />
    );
  });
  return (
    <div className="main shadow p-4 my-5 pb-1 " style={{ backgroundImage: "linear-gradient(to right,rgb(102 119 204 / 94%), rgb(197 196 212), rgb(81 123 199 / 72%))" }} >
      <h2 className="fw-bold pt-3">
        Authors List
        <Link to="/add">
          <button className="ui button purple right ">Add Authors</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderAuthorList}</div>
    </div>
  );
};

export default AuthorList;
