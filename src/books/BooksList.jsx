import Book from "./Book";
import Loader01 from "./Loader01";

function BooksList({ books, likeButtonPressed, likes, addButtonClicked }) {
  return (
    <>
      <ul className="kvc">
        {books.length ? (
          books.map((b) => (
            <Book
              key={b.id}
              book={b}
              like={likes.has(b.id)}
              likeButtonPressed={likeButtonPressed}
              addButtonClicked={addButtonClicked}
            ></Book>
          ))
        ) : (
          <Loader01></Loader01>
        )}
      </ul>
    </>
  );
}

export default BooksList;
