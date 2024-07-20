import React from "react";
import booksData from "../data/books";
import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";


const Update = () => {
  const navigate = useNavigate();
  const {bookId} =  useParams();

  const [updatedBook, setUpdatedBook] = useState();
  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${bookId}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setUpdatedBook(result.data);
    });
  }
  );

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(updatedBook));
    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher:e.target.value,
      value:e.target.value,
      rating:e.target.value,
      synopsis:e.target.value,
    };
    fetch(`http://localhost:8080/api/books/edit/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((response) => {
      // console.log(result.data);
      // setUpdatedBook(result.data);
      if (response.statusCode === 200) {
        navigate("/admin");
      } else {
        throw new Error(response.error)
      }

      })
      .catch((error) => {
        console.log("error", error);
        navigate("admin")
      
    });
  };

  return (
    <>
      <div className="create-container">
        <h1>UPDATE COMIC</h1>
        <form on onSubmit={handleUpdate}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value="title value stored in database"
          />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            value="author value stored in database"
          />
          <br />
          <label htmlFor="publisher">Publisher:</label>
          <select name="publisher" id="publisher">
            <option value="">publisher value stored in database</option>
            <option value="">BOOM! Box</option>
            <option value="">DC Comics</option>
            <option value="">Harry N. Abrams</option>
            <option value="">Icon Books</option>
            <option value="">Image Comics</option>
            <option value="">Marvel</option>
            <option value="">Simon & Schuster</option>
            <option value="">Top Shelf Productions</option>
            <option value="">VIZ Media LLC</option>
          </select>
          <br />
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="author"
            id="author"
            value="genre value stored in database"
          />
          <br />
          <label htmlFor="pages">Number of pages:</label>
          <input type="text" name="value" id="value" value="255" />
          <br />
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value="5"
            min="0"
            max="5"
          />
          <br />
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea id="synopsis" name="synopsis" /> synopsis value stored in
          database
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
