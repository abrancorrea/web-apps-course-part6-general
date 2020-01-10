import React from 'react'
import { filterAction } from '../reducers/filterReducer'
import { filterList } from '../reducers/anecdoteReducer'
import {connect} from 'react-redux'

const Filter = (props) => {
  const handleChange = (e) => {
    const query = e.target.value
    props.filterAction(query)
    props.filterList(query)
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


const mapDispatchToProps = {
    filterAction,
    filterList
}

const ConnectedFilter = connect(null,mapDispatchToProps)(Filter)

export default ConnectedFilter