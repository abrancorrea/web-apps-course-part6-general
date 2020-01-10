import React from 'react'
import { newAnecdote} from '../reducers/anecdoteReducer'


const AnecdoteForm = ({store}) => {


    const handleNewAnecdote = e => {
        e.preventDefault()
        store.dispatch(newAnecdote(e.target.anecdote.value))
      }

    return(
        <>
            <h2>create new</h2>
            <form onSubmit={handleNewAnecdote}>
                <div><input name="anecdote"/></div>
                <button>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm