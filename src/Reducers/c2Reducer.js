import { ADD_1, REM_1 } from "../Constants";

function c2Reducer(state, action) {
  let c = state; //// kopijuojam state

  switch (action.type) {
    case ADD_1:
      c++;
      break;
    case REM_1:
      c--;
      break;
  }

  return c;
}

export default c2Reducer;
