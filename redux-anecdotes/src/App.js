import React from 'react';
import { upVote, newAnecdote} from './reducers/anecdoteReducer'
const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = id => props.store.dispatch( upVote(id) )

  const handleNewAnecdote = e => {
    e.preventDefault()
    props.store.dispatch(newAnecdote(e.target.anecdote.value))
  }

  return (
    <div>
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
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App