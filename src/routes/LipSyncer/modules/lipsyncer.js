import uuidv4 from 'uuid-v4'

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_FRAME = 'SELECT_FRAME'
export const CHANGE_PLAYBACK_RATE = 'CHANGE_PLAYBACK_RATE'

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

export function changePlaybackRate ( newRate = 1 ) {
  return {
    type: CHANGE_PLAYBACK_RATE,
    rate: newRate
  }
}

export const actions = {
  selectFrame,
  changePlaybackRate
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
      selected: action.payload.frameid,
      instructions: {
        ...state.instructions,
        [id]: {
          time: action.payload.time,
          frameid: action.payload.frameid
        }
      }
    }
  },
  [CHANGE_PLAYBACK_RATE] : (state, action) => (
    {
      ...state,
      playbackRate: action.playbackRate
    }
  )
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { 
  instructions: {},
  selected: 0,
  playbackRate: 1
};

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
