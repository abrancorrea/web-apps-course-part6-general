const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

let initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type){
    
    case "UPVOTE":
    let withUpvote = state.find(l => l.id === action.data.id)
    withUpvote = {...withUpvote, votes: (withUpvote.votes + 1) }
    return state.map( l => l.id ===action.data.id? withUpvote : l).sort((a,b) => b.votes - a.votes )

    case "NEWANECDOTE":
    return state.concat(action.data.anecdote)

    case "FILTERLIST":
    return initialState.filter (l => l.content.includes(action.data.query))

    case "INITNOTES":
    return action.data

    default: 
    return state
  }

}


export const upVote = id => {
  return {
    type: "UPVOTE",
    data: {id} 
    }
}

export const newAnecdote = anecdote => {
  return {
    type : "NEWANECDOTE",
    data: {anecdote}
  }
}

export const filterList = query => {
  return {
    type: "FILTERLIST",
    data: {query}
  }
}

export const initializeAnecdotes = data => {
  return {
    type: "INITNOTES",
    data
  }
}
export default reducer