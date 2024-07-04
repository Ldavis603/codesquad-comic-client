import React from 'react';

const Cerate = () => {
    return (
        <>
        <div>Create</div>
        <div className="create-container">

<h1 className="header">CREATE NEW COMIC</h1>
<form>
  <label htmlFor="title">Title:</label>
  <input type="text" id="title" name="title" placeholder="Title" />
  <br />
  <label htmlFor="author">Author:</label>
  <input type="text" id="author" name="author" placeholder="Author" />
  <br />
  <label htmlFor="genre">Genre:</label>
  <input type="text" id="genre" name="genre" placeholder="Genre" />
  <br />
  <label htmlFor="publisher">Publisher:</label>
  <select name="publisher" id="publisher">
    <option value="">Select</option>
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
  <label htmlFor="numberofpages">Number of pages:</label>
  <input
    type="text"
    id="numberofpages"
    name="numberofpages"
    placeholder="Number of pages"
  />
  <br />
  <label htmlFor="rating">Rating:</label>
  <input type="number" id="rating" name="rating" min="0" max="5" />
  <br />
  <label htmlFor="synopsis">Synopsis:</label>
  <textarea id="multilinetext" placeholder="Synopsis"></textarea>
  <br />
  <button type="submit">Submit</button>   
  </form> 
</div>


        </>
    )
}

export default Cerate;