import React  from 'react'
import {connect} from 'react-redux'


import { upVote } from '../reducers/anecdoteReducer'
import { show, clear } from '../reducers/notificationReducer'



const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes

    const vote = (id, anecdote) => {
        props.upVote(id)
       props.show(anecdote)
        setTimeout( () => props.clear(), 5000)
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdote,
        notification: state.notification,
        filter: state.filter
      }
  }

  const mapDispatchToProps = {
    upVote,
    show,
    clear
  }

const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedList