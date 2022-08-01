import Edit from "./Edit";

function Show({ showId, setShowId, show, setEdit }) {
  if (showId === 0) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" onClick={() => setShowId(0)} className="close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            <Edit
              setShowId={setShowId}
              showData={show()}
              setEdit={setEdit}
            ></Edit>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
