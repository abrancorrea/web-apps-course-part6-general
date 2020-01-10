

const filterReducer = (state = "", action) => {
    if(action.type === "QUERY"){

        return action.data.query
    }
    return state
}

export const filterAction = query => {
    return {
        type: "QUERY",
        data: {query}
    }
}


export default filterReducer