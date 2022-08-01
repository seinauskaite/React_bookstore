function State3({ plus, nr, minus }) {
  return (
    <>
      <div className="kvc">
        <h1>Skaicius: {nr} </h1>
        <div></div>
        <button onClick={plus}>+++</button>
        <button onClick={minus}>---</button>
      </div>
    </>
  );
}

export default State3;
