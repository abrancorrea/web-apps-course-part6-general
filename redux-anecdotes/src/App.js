import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = props => {
  const anecdotes = props.store.getState().anecdote


  const store = props.store
  

  return (
    <div>
      <Notification store={store} />
      <Filter store={store} />
      <AnecdoteList store={store} anecdotes={anecdotes} />
      <AnecdoteForm store={store} /> 
    </div>
  )
}

export default App