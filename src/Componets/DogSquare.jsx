function DogSquare({ dogs }) {
  const dogs2 = dogs.sort((a, b) => b.length - a.length);
  console.log(dogs2);

  return (
    <div className="kvc">
      {dogs2.map((a, i) => (
        <div key={i} className="sq_dog">
          {i + 1} <br></br>
          {a}
        </div>
      ))}
    </div>
  );
}

export default DogSquare;
