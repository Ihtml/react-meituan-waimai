import { ADD_TODO } from '../actions/actionTypes'

const initState = {
  num: 0
}

const addNum = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  newState.num = state.num + action.obj.num
  return newState
}
const TabReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addNum(state, action)
    default:
      return state
  }
}

export default TabReducer
