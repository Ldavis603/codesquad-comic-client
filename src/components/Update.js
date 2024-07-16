import React from "react";
import booksData from "../data/books";
import { useEffect, useState } from "react";


const Update = () => {

  const id =  "66b62a49-a8de-4914-ab3f-49fe0554c08a";

  const [updatedBook, setUpdatedBook] = useState();
  useEffect(() => {
    const books = booksData;
  }
  );

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(handleUpdate)

  }

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
          <input type="text" name="author" id="author" value="255" />
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
