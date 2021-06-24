
const initialState = {
    commits : [],
}


function rootReducer(state = initialState, action) {
    if (action.type === "GET_COMMITS") {
        return {
            ...state,
          commits: action.payload
        };
    }

    return state;
}

export default rootReducer;