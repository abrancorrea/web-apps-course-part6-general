import React from 'react'
import { newAnecdote} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'
const AnecdoteForm = (props) => {


    const handleNewAnecdote = async e => {
        e.preventDefault()
        const content = e.target.anecdote.value
        
        const newObject = await anecdoteService.create(content)
        props.newAnecdote(newObject)
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