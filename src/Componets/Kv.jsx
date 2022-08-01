function Kv({ kv }) {
  return (
    <>
      {kv.map((k, i) => (
        <div key={i} className="kv">
          {k}
        </div>
      ))}
    </>
  );
}

export default Kv;
