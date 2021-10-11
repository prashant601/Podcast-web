import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/authors";

import "./Authors.css";
import Navbar from "./Navbar";
import AddAuthor from "./Authors/AddAuthor";
import Home from "./Home";
import About from "./About";
import AuthorList from "./Authors/AuthorList";
import AuthorDetail from "./Authors/AuthorDetail";
import EditAuthor from "./Authors/EditAuthor";

import AlbumDetail from "./Albums/AlbumDetail"
import AddAlbum from "./Albums/AddAlbum"

function Authors() {
  const [authors, setAuthors] = useState([]);

  //RetrieveAuthors
  const retrieveAuthors = async () => {
    const response = await api.get("/authors");
    return response.data;
  };

  const addAuthorHandler = async (author) => {
    console.log(author);
    const request = {
      id: uuid(),
      ...author,
    };

    const response = await api.post("/authors", request);
    console.log(response);
    setAuthors([...authors, response.data]);
  };

  const updateAuthorHandler = async (author) => {
    const response = await api.put(`/authors/${author.id}`, author);
    const { id, name, email, albums, audios } = response.data;
    setAuthors(
      authors.map((author) => {
        return author.id === id ? { ...response.data } : author;
      })
    );
  };

  const removeAuthorHandler = async (id) => {
    await api.delete(`/authors/${id}`);
    const newAuthorList = authors.filter((author) => {
      return author.id !== id;
    });

    setAuthors(newAuthorList);
  };

  useEffect(() => {
    const getAllAuthors = async () => {
      const allAuthors = await retrieveAuthors();
      if (allAuthors) setAuthors(allAuthors);
    };

    getAllAuthors();
  }, []);

  useEffect(() => {

  }, [authors]);

  return (
    <div>
      <Router>
        <Navbar />  
        <div className="ui container">
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/About" component={About} />

          <Route
            path="/Authors"
            exact
            render={(props) => (
              <AuthorList
                {...props}
                authors={authors}
                getAuthorId={removeAuthorHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddAuthor {...props} addAuthorHandler={addAuthorHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditAuthor
                {...props}
                updateAuthorHandler={updateAuthorHandler}
              />
            )}
          />

          <Route path="/author/:id" component={AuthorDetail} />
          

         


          {/* for albums */}
          
          <Route
            path="/addAlbum"
            render={(props) => (
              <AddAlbum {...props} addAuthorHandler={addAuthorHandler} />
            )}
          />
          


        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Authors;
