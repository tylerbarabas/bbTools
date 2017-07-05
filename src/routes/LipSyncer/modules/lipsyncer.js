import uuidv4 from 'uuid-v4'
import json from '../../../../public/img/mouth.json'

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

//------------------------------------
// Utility
//------------------------------------
const framerate = 100;
const round = (num)=>{
  return Math.round(100*num)/100;
}

const compileAnim = (instructions) => {

  var values = Object.values(instructions).sort((a,b)=>a.time-b.time),
      arr = [];

  for (var i=0;i<values.length;i++) {

    let inst = values[i];

    if (inst.time > 0){

      let lastInst = values[i-1] || {time: 0, frameid: inst.frameid},
          timeDiff = inst.time - lastInst.time,
          numFrames = (timeDiff * framerate)-1;

      for (var o=0;o<numFrames;o++){
        arr.push(lastInst.frameid);
      }

    }

    arr.push(inst.frameid);

  }

  return arr;

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
    var newState = {
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

    newState.anim = compileAnim(newState.instructions);

    return newState;

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
  json: json,
  anim: [], 
  instructions: {},
  selected: 0,
  playbackRate: 1
};

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
