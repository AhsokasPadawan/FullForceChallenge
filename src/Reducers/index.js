
const initialState = {
    commits : [],
    fullcommit : {},
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
            fullcommit: action.payload
        }
    }

    return state;
}

export default rootReducer;