function DogMix({ dogs }) {
  return (
    <div className="kvc">
      {dogs.map((a, i) => {
        if (i % 2 === 0) {
          return (
            <div key={i} className="kv_dog">
              {a}
            </div>
          );
        } else {
          return (
            <div key={i} className="sq_dog">
              {i + 1} <br></br>
              {a}
            </div>
          );
        }
      })}
    </div>
  );
}

export default DogMix;
