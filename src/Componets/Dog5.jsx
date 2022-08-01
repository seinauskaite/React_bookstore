function Dog5({ dogs }) {
  return (
    <div className="kvc">
      {dogs.map((a, i) => {
        return (
          <div key={i} className={a.length > 6 ? "kv_dog red" : "kv_dog"}>
            {a.length} <br></br>
            {a}
          </div>
        );
      })}
    </div>
  );
}

export default Dog5;
