function Range({ minMax, filter, setFilter }) {
  return (
    <>
      <div>
        <div>
          <label>Book min price: {filter}</label>
        </div>
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="range"
          min={Math.floor(minMax[0])}
          max={Math.ceil(minMax[1])}
          value={filter}
        ></input>
      </div>
    </>
  );
}

export default Range;
