function Animal({ a, deleteAnimal, setShowId }) {
  return (
    <li className="list-group-item">
      <div className="bin">
        <div className="content">
          <strong>{a.type}</strong>
          <small>{a.weight}</small>
          <span style={{ visibility: a.isAlive ? "visible" : "hidden" }}></span>
        </div>
        <button
          onClick={() => setShowId(a.id)}
          type="button"
          className="btn btn-outline-success mt-3"
        >
          Edit
        </button>
        <button
          onClick={() => deleteAnimal(a.id)}
          type="button"
          className="btn btn-outline-danger mt-3"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Animal;
