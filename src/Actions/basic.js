import {
  ADD_1,
  REM_1,
  ADD_KV,
  REM_KV,
  ADD_MANY_SQ,
  ADD_NAMES,
} from "../Constants";
import GET_USERS_NAMES_FROM_SERVER from "/const";

export function add1() {
  return {
    type: ADD_1,
  };
}

export function rem1() {
  return {
    type: REM_1,
  };
}

export function addKv() {
  return {
    type: ADD_KV,
  };
}

export function remKv() {
  return {
    type: REM_KV,
  };
}

export function addManySq(howMuch) {
  return {
    type: ADD_MANY_SQ,
    payload: howMuch,
  };
}

export function loadNames() {
  return {
    type: ADD_NAMES,
  };
}

export function getUserNamesFromServer(names) {
  return {
    type: GET_USERS_NAMES_FROM_SERVER,
    payload: names,
  };
}
