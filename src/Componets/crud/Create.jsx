import { useState } from "react";

function Create({ setCreate }) {
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [isAlive, setIsAlive] = useState(0);

  const buttonHandler = () => {
    setCreate({
      type,
      weight,
      isAlive,
    });
    setType("");
    setWeight("");
    setIsAlive(0);
  };

  return (
    <div className="App">
      <div className="container create">
        <div className="row">
          <div className="col-sm">
            <div className="card mt-4">
              <div className="card-header">Create</div>
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
                  onClick={buttonHandler}
                  type="button"
                  className="btn btn-outline-info mt-3"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
