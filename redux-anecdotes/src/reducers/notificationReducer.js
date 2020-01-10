const initialNotif = ''

const notificationReducer = (state = initialNotif, action) => {
    switch (action.type) {
        case "SHOW":
        return action.data.message
        default:
        return state
        case "CLEAR":
        return ""
    }
}

export const show = anecdote => {
    return {
        type: "SHOW",
        data: {message: `you voted '${anecdote}' ` }
    }

}

export const clear = () => {
    return {
        type: "CLEAR"
    }
}


export default notificationReducer