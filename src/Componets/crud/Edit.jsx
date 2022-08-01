import { useEffect, useState } from "react";

function Edit({ setShowId, showData, setEdit }) {
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [isAlive, setIsAlive] = useState(0);

  const buttonHandler = () => {
    setEdit({
      type,
      weight,
      isAlive,
      id: showData.id,
    });
    setType("");
    setWeight("");
    setIsAlive(0);
    setShowId(0);
  };

  useEffect(() => {
    setType(showData.type);
    setWeight(showData.weight);
    setIsAlive(showData.isAlive);
  }, [showData]);

  return (
    <div className="App">
      <div className="container edit">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-header">Edit</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Animal</label>
                  <input
                    type="text"
                    value={type}
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                  />
                  <small className="form-text text-muted">
                    Enter animal name
                  </small>
                </div>
                <div className="form-group">
                  <label>Animal weight</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="form-control"
                  />
                  <small className="form-text text-muted">How big animal</small>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value={isAlive}
                    onChange={() => setIsAlive((a) => (a ? 0 : 1))}
                    type="checkbox"
                  />
                  <label className="form-check-label">Is alive? </label>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-success mr-2"
                  onClick={buttonHandler}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => setShowId(0)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
