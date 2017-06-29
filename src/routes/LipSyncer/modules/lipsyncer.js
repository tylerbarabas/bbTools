import uuidv4 from 'uuid-v4'

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_FRAME = 'SELECT_FRAME'
// ------------------------------------
// Actions
// ------------------------------------



export function selectFrame (frameid = 0, time = 0) {
  return {
    type: SELECT_FRAME,
    payload: {
      time: time,
      frameid: frameid
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
    let id = uuidv4();
    for (var i in state.instructions) {
      if (state.instructions[i].time === action.payload.time) id = i;
    }
    return {
      ...state,
      selected: action.payload.id,
      instructions: {
        ...state.instructions,
        [id]: {
          time: action.payload.time,
          frameid: action.payload.frameid
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
