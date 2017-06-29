import uuidv4 from 'uuid-v4'

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_FRAME = 'SELECT_FRAME'
// ------------------------------------
// Actions
// ------------------------------------



export function selectFrame (id = 0, time = 0) {
  return {
    type: SELECT_FRAME,
    payload: {
      time: time,
      id: id
    }
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
      selected: action.payload.id,
      instructions: {
        ...state.instructions,
        [uuidv4()]: {
          time: action.payload.time,
          frameid: action.payload.id
        }
      }
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { 
  instructions: {},
  selected: 0
};

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
