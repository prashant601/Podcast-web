import React from 'react'
import { Link } from "react-router-dom";

const AlbumDetail = (props) => {
    const { id, name, email, albums } = props.location.state.author;

    return (
        <div>
        <div className="container shadow">
        {
          <>
            <ul>
              {albums.map((sub) => (
                <li className="fs-4">
                <Link className="text-decoration-none "
          to={{ pathname: `/author/${id}/albums`, state: { author: props.author } }}
        >
          <div className="header text-decoration-none fs-4">{sub.name}</div>
          <div className="py-2 fs-5">{sub.aa}</div>
        </Link>
                </li>
              ))}
            </ul>
          </>
        }
      </div>
            
        </div>
    )
}

export default AlbumDetail
