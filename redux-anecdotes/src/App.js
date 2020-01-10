import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'


const App = (props) => {
  const anecdotes = props.store.getState()


  const store = props.store
  

  return (
    <div>
      <AnecdoteList store={store} anecdotes={anecdotes} />
      <AnecdoteForm store={store} /> 
    </div>
  )
}

export default App