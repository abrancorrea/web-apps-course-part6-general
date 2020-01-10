import React  from 'react'
import { upVote } from '../reducers/anecdoteReducer'
import { show, clear } from '../reducers/notificationReducer'


const AnecdoteList = ({store, anecdotes}) => {

    const vote = (id, anecdote) => {
        store.dispatch( upVote(id) )
        store.dispatch( show (anecdote))
        setTimeout( () => store.dispatch(clear()), 5000)
    }

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
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
       )}
        </>
    )
}

export default AnecdoteList