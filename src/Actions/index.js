import {BASE_URL, COMMIT, FULLCOMMIT} from '../constants';
import axios from 'axios';

// traigo todos los commits
export function getCommits() {
    return function(dispatch) {
      return axios.get(`${BASE_URL}${COMMIT}`)
        .then(response => {
          dispatch({ type: "GET_COMMIT", payload: response});
    })
  }
}


//traigo el detalle completo de un solo commit
export function getFullDogs(sha){
  return function(dispatch) {
    return axios.get(`${BASE_URL}${FULLCOMMIT}${sha}`)
    .then(response => {
      dispatch({ type: "GET_FULLCOMMIT", payload: response});
    })
  }
}
