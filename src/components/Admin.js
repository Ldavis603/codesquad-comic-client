import React from "react";
import { useState, useEffect } from "react";

import booksData from "../data/books";

const Admin = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const books = booksData;
  });

  // }, []);

  return (
    <>
      <div className="create-container">
        <h1>ADMIN PAGE</h1>

        <div style={{ overflowX: "auto" }}></div>
        <thead>
          <tr>
            <th scope="col">COMIC TITLE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        {booksData.map((book) => (
          <div key={book._id} className="single-book-container">
            <tbody>
              <tr>
                <td>{book.title}</td>
                <td>
                  <button className="editbtn2">EDIT</button>
                </td>
                <td>
                  <button className="editbtn">DELETE</button>
                </td>
              </tr>
            </tbody>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admin;
