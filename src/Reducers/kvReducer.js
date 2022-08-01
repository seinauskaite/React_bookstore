import { ADD_KV, ADD_MANY_SQ, REM_KV } from "../Constants";

function kvReducer(state, action) {
  let copy = [...state];

  switch (action.type) {
    case ADD_KV:
      copy.push(1);
      break;
    case REM_KV:
      copy.pop(1);
      break;
    case ADD_MANY_SQ:
      for (let i = 0; i < action.payload; i++) {
        copy.push(1);
      }
      break;
    default:
  }
  return copy;
}

export default kvReducer;
