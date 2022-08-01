function B_stateuplift({ showBlue }) {
  return (
    <>
      <div className="kvc">
        {showBlue ? (
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "blue",
            }}
          ></div>
        ) : null}
      </div>
    </>
  );
}

export default B_stateuplift;
