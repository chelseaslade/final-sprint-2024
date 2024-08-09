import React from "react";
import "../App.css";
import { mockData } from "../mockAPI";

const Home = () => {
  const getRandomBooks = () => {
    const shuffledBooks = [...mockData.products].sort(
      () => 0.5 - Math.random()
    );
    return shuffledBooks.slice(0, 3);
  };

  const randomBooks = getRandomBooks();

  return (
    <>
      <div className="Home">
        <div className="Featured">
          <h2>Featured Books</h2>
          <div className="BookBoxContainer">
            {randomBooks.map((book) => (
              <div key={book.id} className="BookBox">
                <img
                  src={book.image}
                  alt={book.name}
                  style={{
                    width: "100px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3>{book.name}</h3>
                <p>by {book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
