
const initialState = {
    commits : [],
    fullCommit : {},
}


function rootReducer(state = initialState, action) {
    if (action.type === "GET_COMMITS") {
        return {
            ...state,
          commits: action.payload
        };
    }
    if (action.type === "GET_FULLCOMMIT"){
        return {
            ...state,
            fullCommit: action.payload
        }
    }

    return state;
}

export default rootReducer;