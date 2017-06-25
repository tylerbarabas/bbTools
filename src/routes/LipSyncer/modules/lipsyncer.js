// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_FRAME = 'SELECT_FRAME'
// ------------------------------------
// Actions
// ------------------------------------

export function selectFrame (id = 0) {
  return {
    type: SELECT_FRAME,
    payload: id
  }
}

export const actions = {
  selectFrame
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_FRAME] : (state, action) => {
    return {
      ...state,
      selected: action.id
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { 
  selected: 0,
  instructions: []
};
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
