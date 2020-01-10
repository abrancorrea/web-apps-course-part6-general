const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
  const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'GOOD':
          const stateGood = {...state, good: (state.good +1)}
        return stateGood
      case 'OK':
         const stateOk = {...state, ok: (state.ok +1)}
        return stateOk
      case 'BAD':
        const stateBad = {...state, bad: (state.bad +1)}
        return stateBad
      case 'ZERO':
        const zeroState = {good: 0, ok: 0, bad: 0}
        return zeroState
        default:
            return state
    }
  }
  
  export default counterReducer