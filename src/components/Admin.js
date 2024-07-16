import React from "react";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import booksData from "../data/books";

const Admin = () => {

  const { bookId } = useParams();
  const navigate = useNavigate();


  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/books")
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data);
      setBooks(result.data);
    });

  

  }, []);

  return (
    <>
      <div className="create-container">
        <h1>ADMIN PAGE</h1>

        <div className="table-container" style ={{overflowX:"auto"}}>
        <thead>
          <tr>
            <th >COMIC TITLE</th>
            <th >EDIT</th>
            <th >DELETE</th>
          </tr>
        </thead>
        {booksData.map((book) => (
          <div key={book._id} className="single-book-container">
            <tbody>
              <tr>
                <td>{book.title}</td>
                <td>
                <button onClick={() => navigate("/update")}>
            {" "}
            Update
          </button>

                </td>
                <td>
                <button style={{backgroundColor:"teal"}} onClick={(e) => {
            fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
                method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
      });
          }} >
            
            {" "}
            Delete
          </button>
                  
                </td>
              </tr>
            </tbody>
            
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Admin;
