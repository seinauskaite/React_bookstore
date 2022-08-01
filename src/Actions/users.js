import {
  GET_USERS_FROM_SERVER,
  BY_ZIP,
  SORT_USERS_AY,
  SORT_USERS_YA,
} from "../Constants/users";

export function getUsersFromServer(users) {
  return {
    type: GET_USERS_FROM_SERVER,
    payload: users,
  };
}

export function sortUsersAY() {
  return {
    type: SORT_USERS_AY,
  };
}

export function sortUsersYA() {
  return {
    type: SORT_USERS_YA,
  };
}

export function byZip(direction) {
  return {
    type: BY_ZIP,
    payload: direction,
  };
}
