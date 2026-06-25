import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);
  const [spells, setSpells] = useState([]);
  const [section, setSection] = useState("characters");

  useEffect(() => {
    axios
      .get("http://localhost:3000/en/characters")
      .then((res) => setCharacters(res.data));

    axios
      .get("http://localhost:3000/en/books")
      .then((res) => setBooks(res.data));

    axios
      .get("http://localhost:3000/en/spells")
      .then((res) => setSpells(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        ⚡ Potter Explorer ⚡
      </h1>

      <div className="text-center mb-4">
        <button
          className="btn btn-primary me-2"
          onClick={() => setSection("characters")}
        >
          Personajes
        </button>

        <button
          className="btn btn-success me-2"
          onClick={() => setSection("books")}
        >
          Libros
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setSection("spells")}
        >
          Hechizos
        </button>
      </div>

      {section === "characters" &&
        characters.map((character) => (
          <div className="card mb-3" key={character.index}>
            <div className="card-body">
              <h4>{character.fullName}</h4>
              <p><strong>Casa:</strong> {character.hogwartsHouse}</p>
              <p><strong>Interpretado por:</strong> {character.interpretedBy}</p>
            </div>
          </div>
        ))}

      {section === "books" &&
        books.map((book) => (
          <div className="card mb-3" key={book.index}>
            <div className="card-body">
              <h4>{book.title}</h4>
              <p>{book.description}</p>
              <p>
                <strong>Fecha:</strong> {book.releaseDate}
              </p>
            </div>
          </div>
        ))}

      {section === "spells" &&
        spells.map((spell) => (
          <div className="card mb-3" key={spell.index}>
            <div className="card-body">
              <h4>{spell.spell}</h4>
              <p>{spell.use}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;