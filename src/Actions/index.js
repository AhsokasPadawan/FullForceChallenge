import {BASE_URL, COMMIT, FULLCOMMIT} from '../constants';
import axios from 'axios';

// traigo todos los commits
export function getCommits() {
    return function(dispatch) {
      return axios.get(`${BASE_URL}${COMMIT}`)
        .then(response => {
          dispatch({ type: "GET_COMMITS", payload: response.data});
    })
  }
}
