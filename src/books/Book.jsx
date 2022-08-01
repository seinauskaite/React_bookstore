function Book({
  book,
  likeButtonPressed,
  like,
  setCart,
  addToCart,
  addButtonClicked,
}) {
  return (
    <>
      <div className="book">
        <img src={book.img} />
        <small>{book.title}</small>
        <i>{book.author}</i>
        <p className="price">{book.price}</p>
        <svg
          className={like ? "like" : ""}
          onClick={() => likeButtonPressed(book.id)}
        >
          <use xlinkHref="#heart"></use>
        </svg>
        <button onClick={() => addButtonClicked(book.id)} className="btn">
          add
        </button>
      </div>
    </>
  );
}

export default Book;
