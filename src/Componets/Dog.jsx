function Dogs({ dogs }) {
  return (
    <div className="kvc">
      {dogs.map((a, i) => (
        <div key={i} className="kv_dog">
          {a}
        </div>
      ))}
    </div>
  );
}

export default Dogs;
