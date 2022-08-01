import {
  GET_USERS_FROM_SERVER,
  SORT_USERS_AY,
  SORT_USERS_YA,
  BY_ZIP,
} from "../Constants/users";

function usersReducer(state, action) {
  let c = [...state];

  switch (action.type) {
    case GET_USERS_FROM_SERVER:
      c = action.payload;
    case SORT_USERS_AY:
      c.sort((a, b) => {
        if (a.username > b.username) {
          return 1;
        }
        if (b.username > a.username) {
          return -1;
        }
        return 0;
      });
      break;
    case SORT_USERS_YA:
      c.sort((a, b) => {
        if (a.username > b.username) {
          return -1;
        }
        if (b.username > a.username) {
          return 1;
        }
        return 0;
      });
      break;

    case BY_ZIP:
      c.sort((a, b) => {
        if (a.address.zipcode > b.address.zipcode) {
          return 1 * action.payload;
        }
        if (a.address.zipcode < b.address.zipcode) {
          return -1 * action.payload;
        }
        return 0;
      });
      break;
    default:
  }

  return c;
}

export default usersReducer;
