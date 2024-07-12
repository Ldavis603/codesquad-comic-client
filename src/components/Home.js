import { useEffect, useState } from "react";
import React from "react";
import booksData from "../data/books";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const books = booksData;
  });
  // }, []);

  return (
    <>
      <div className="upper-container">
        <h1>ABOUT CODESQUAD COMICS</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by LaJanae
          Davis. The site is intended to display comic book covers along with
          information about each book, including the author, a rating, and other
          details about the graphic novel. Browse through the complete
          collection below. Click on the cover image or the Details link to see
          even more information about each graphic novel including the
          publisher, genre, number of pages, and a brief synopsis. The About
          page includes meta information about this collection. Login is only
          available to the site administrator at this time.
        </p>
      </div>
      <div className="lower-container">
        <div className="comic-list">
          {booksData.map((book) => (
            <div key={book._id} className="single-book-container">
              <a href={`/books/${book._id}`}>
                <img
                  className="image-cover"
                  src={`/images/${book.image}`}
                  alt={book.title}
                  width="250"
                  height="250"
                />
              </a>{" "}
              <br />
              <p>{book.title}</p>
              <p>{book.rating} stars</p>
              <a href={`/books/${book._id}`}>Details </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
