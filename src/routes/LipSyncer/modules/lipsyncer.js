// ------------------------------------
// Constants
// ------------------------------------
export const LIPSYNCER_INCREMENT = 'LIPSYNCER_INCREMENT'
export const LIPSYNCER_DOUBLE_ASYNC = 'LIPSYNCER_DOUBLE_ASYNC'
export const LIPSYNCER_TRIPLE = 'LIPSYNCER_TRIPLE'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : LIPSYNCER_INCREMENT,
    payload : value
  }
}

export function triple (value = 0) {
    return {
      type: LIPSYNCER_TRIPLE,
      payload: value
    }
};

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : LIPSYNCER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync,
  triple
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LIPSYNCER_INCREMENT]    : (state, action) => state + action.payload,
  [LIPSYNCER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [LIPSYNCER_TRIPLE] : (state, action) => state * 3
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
