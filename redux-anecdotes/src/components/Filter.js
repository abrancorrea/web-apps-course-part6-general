import React from 'react'
import { filterAction } from '../reducers/filterReducer'
import { filterList } from '../reducers/anecdoteReducer'

const Filter = ({store}) => {
  const handleChange = (e) => {
    const query = e.target.value
    store.dispatch(filterAction(query))
    store.dispatch(filterList(query))
}
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter