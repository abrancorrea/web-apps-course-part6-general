import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  // console.log('and here is ', store.getState().notification)
  return (
    <div style={style}>
     {props.notification}
    </div>
  )
}

const mapStateToProp = state => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProp)(Notification)

export default ConnectedNotification