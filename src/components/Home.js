import React from 'react';

const Home = () => {
    return (
        <>
        <div>
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
          <div>
            <article className="fun-home">
              <img
                src="./public/images/fun-home.jpg"
                style={{width: "200"}}
                alt="Fun Home Cover"
              />
              <p>
                <i>Fun Home: A Family Tragicomic</i><br />
                by Alison Bechdel<br />
                5 stars
              </p>
              <a href="#" className="class2">Details</a>
            </article>
          </div>
          <div>
            <article className="watchmen-cover">
              <img
                src="./public/images/watchmen.jpg"
                style={{width: "200"}}
                alt="Watchmen Cover"
              />
              <p>
                <i>Watchmen</i><br />
                by Alan Moore<br />
                5 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="hunter-x-hunter-cover">
              <img
                src="./public/images/hunter-x-hunter.jpg"
                style={{width: "200"}}
                alt="HunterX Cover"
              />
              <p>
                <i>Hunter X Hunter Vol.1</i><br />
                by Yoshihiro Togashi<br />
                5 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="lumberjanes-cover">
              <img
                src="./public/images/lumberjanes.jpg"
                style={{width: "200"}}
                alt="Lumberjanes Cover"
              />
              <p>
                <i>Lumberjanes Vol. 1</i><br />
                by Noelle Stevenson<br />
                4 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="one-piece-cover">
              <img
                src="./public/images/one-piece.jpg"
                style={{width: "200"}}
                alt="One Piece Cover"
              />
              <p>
                <i>One Piece, Vol. 1: Romance Dawn</i><br />
                by Eiichiro Oda<br />
                5 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="wake-cover">
              <img
                src="./public/images/wake.jpg"
                style={{width: "200"}}
                alt="Wake Cover"
              />
              <p>
                <i>Wake: The Hidden History of Women-Led Slave Revolts</i><br />
                by Rebecca Hall<br />
                4 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="black-panther-cover">
              <img
                src="./public/images/black-panther.jpg"
                style={{width: "200"}}
                alt="Black Panther Cover"
              />
              <p>
                <i>Black Panther: A Nation Under Our Feet Book 1</i><br />
                by Ta-Nehisi Coates<br />
                3 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="the-walking-dead-cover">
              <img
                src="./public/images/the-walking-dead.jpg"
                style={{width: "200"}}
                alt="Walking Dead Cover"
              />
              <p>
                <i>The Walking Dead, Vol. 1: Days Gone Bye</i><br />
                by Robert Kirkman<br />
                4 stars
              </p>
              <a href="the-walking-dead-card.html">Details</a>
            </article>
          </div>
          <div>
            <article className="march-cover">
              <img
                src="./public/images/march.jpg"
                style={{width: "200"}}
                alt="March Cover"
              />
              <p>
                <i>March: Book One</i><br />
                by John Lewis<br />
                5 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="batman">
              <img
                src="./public/images/batman.jpg"
                style={{width: "200"}}
                alt="Batman Cover"
              />
              <p>
                <i>Batman: The Dark Knight Returns</i><br />
                by Frank Miller<br />
                3 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="queer-cover">
              <img
                src="./public/images/queer.jpg"
                style={{width: "200"}}
                alt="Queer Cover"
              />
              <p>
                <i>Queer: A Graphic History</i><br />
                by Meg-John Barker<br />
                4 stars
              </p>
              <a href="#">Details</a>
            </article>
          </div>
          <div>
            <article className="parable-of-the-sower-cover">
              <img
                src="./public/images/parable-of-the-sower.jpg"
                style={{width: "200"}}
                alt="Parable Cover"
              />
              <p>
                <i>Parable of the Sower</i><br />
                by Octavia E. Butler<br />
                4 stars
              </p>
              <a href="#">Details</a>
            </article>
            <br />
          </div>
        </div>
        <div><button type="submit">Display More</button></div>
      </div>

        </div>
        </>
    )
}

export default Home;