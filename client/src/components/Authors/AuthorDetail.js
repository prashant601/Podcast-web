import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumDetail from "./../Albums/AlbumDetail"

const AuthorDetail = (props) => {
  const { id, name, email, albums , audios } = props.location.state.author;

  return (
    <div className="main my-3">
      <div className="center-div">
        <Link to="/Authors">
          <button className="ui button purple center">
            Back to Author List
          </button>
        </Link>
      </div>
      <div className="ui card centered d-flex justify-content-center align-authors-center">
        <div className="content">
          <div className="header fs-3">Albums of <span className=" fw-bold text-secondary">{name}</span> </div>
        </div>
      </div>


      {/* //Albums///////////////// */}

      
      <div className="main shadow my-2 p-2 pb-1" style={{ backgroundColor: "rgb(150 163 198)" }}>
      <h2 className="fw-bold pt-3 my-2" >
        Albums List
        <Link to="/addAlbum">
          <button className="ui button purple right ">Add Albums</button>
        </Link>
      </h2>
      <div className="container ">
        {
          <>
            <ul>
              {albums.map((sub) => (
                <li className="fs-4">
                <Link className="text-decoration-none "
          to={{ pathname: `/author/${id}/albums`, state: { author: props.author } }}
        >
          <div className="header fw-bolder text-dark text-decoration-none fs-4">{sub.name}</div>
          <div className="py-2 fs-5">{sub.aa}</div>
        </Link>
                </li>
              ))}
            </ul>
          </>
        }
      </div>
      </div>
     {/* <AlbumDetail /> */}


    </div>
  );
};

export default AuthorDetail;
