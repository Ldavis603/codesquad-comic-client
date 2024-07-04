import React from 'react';

const Admin = () => {
    return (
        <>
      <div>Admin</div>
      <div class="create-container">
    <h1>ADMIN PAGE</h1>
        <td><button className="editbtn">ADD NEW COMIC</button></td>
        <div style={{overflowX:"auto"}}></div>
    <table>
      <thead>
        <tr>
          <th scope="col">COMIC TITLE</th>
          <th scope="col">EDIT</th>
          <th scope="col">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batman: The Dark Knight Returns</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Black Panther: A Nation Under Our Feet Book 1</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Fun Home: A Family Tragicomic</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Hunter X Hunter Vol. 1</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Lumberjames Vol.1</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>March: Book One</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>One Piece, Vol.1: Romance Dawn</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Parable of the Sower</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Queer: A Graphic History</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>The Walking Dead, Vol: 1 Days Gone Bye</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
        <tr>
          <td>Watchmen</td>
          <td><button className="editbtn2">EDIT</button></td>
          <td><button className="editbtn">DELETE</button></td>
        </tr>
      </tbody>
    </table>
    </div>
  
      </>
    )
  }

  export default Admin;

