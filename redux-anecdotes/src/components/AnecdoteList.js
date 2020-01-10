import React  from 'react'
import { upVote } from '../reducers/anecdoteReducer'


const AnecdoteList = ({store, anecdotes}) => {

    const vote = id => store.dispatch( upVote(id) )

    return(
        <>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
       )}
        </>
    )
}

export default AnecdoteList