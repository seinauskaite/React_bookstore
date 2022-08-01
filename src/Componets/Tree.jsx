function Tree({ trees, name }) {
  return (
    <div className="tree">
      <h2>{name}</h2>
      <div className="kvc">
        {trees.map((_, i) => (
          <div key={i} className="kv_big">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tree;
