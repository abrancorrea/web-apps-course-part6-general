import React, { useEffect} from 'react';
import { connect  } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import anecdotesService from './services/anecdotes'

const App = props => {


  useEffect(() => {
    anecdotesService
      .getAll().then(all => props.initializeAnecdotes(all))
  },[])

  // const store = props.store
  

  return (
    <div>
      <h3>Programming Anecdotes </h3>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm /> 
    </div>
  )
}

const mapDispatchToProps = {
  initializeAnecdotes
}

const ConnectedApp = connect(null,mapDispatchToProps)(App)

export default ConnectedApp