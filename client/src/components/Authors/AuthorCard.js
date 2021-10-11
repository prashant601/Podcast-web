import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";

const AuthorCard = (props) => {
  const { id, name, email, albums , audios } = props.author;
  return (
    <div className="item" >
      <img className="ui avatar image mx-2" src={user} alt="user" />
      <div className="content mx-3">
        <Link className="text-decoration-none "
          to={{ pathname: `/author/${id}`, state: { author: props.author } }}
        >
          <div className="header text-decoration-none fs-4">{name}</div>
          <div className="py-2 fs-5">{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "11px", marginLeft: "10px", marginRight: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { author: props.author } }}>
        <i
          className="edit alternate outline icon text-decoration-none"
          style={{ color: "blue",  marginTop: "11px" }}
        ></i>
      </Link>
    </div>
  );
};

export default AuthorCard;
