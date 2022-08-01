function Dog4({ dogs }) {
  return (
    <div className="kvc">
      {dogs.map((a, i) => {
        if (a.match(/[A-Z, Ž, Š]/g) == null) {
          return (
            <div key={i} className="kv_dog">
              {a}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Dog4;
