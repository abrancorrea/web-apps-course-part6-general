import React from 'react'
import { newAnecdote} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {


    const handleNewAnecdote = e => {
        e.preventDefault()
        props.newAnecdote(e.target.anecdote.value)
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

const mapDispatchToProps = {
    newAnecdote
}

const ConnectedAnecdoteForm = connect(null,mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm