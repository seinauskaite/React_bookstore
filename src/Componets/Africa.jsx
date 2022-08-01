import Animal from "./Animal";

function Africa(props) {
  return (
    <>
      <h3
        style={{
          color: props.color,
        }}
      >
        {props.text}
      </h3>
      <Animal animal={props.animal}></Animal>
    </>
  );
}

export default Africa;
