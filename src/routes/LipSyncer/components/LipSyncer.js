import React from 'react'
import PropTypes from 'prop-types'
import FrameSelector from './FrameSelector'
import AudioPlayer from './AudioPlayer'
import InstructionsViewer from './InstructionsViewer'

export const LipSyncer = ({ data, selectFrame, changePlaybackRate }) => (
  <div>
    <AudioPlayer data={data} changePlaybackRate={changePlaybackRate} />
    <InstructionsViewer data={data}/>
    <FrameSelector selectFrame={selectFrame} data={data} />
  </div>
)

LipSyncer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LipSyncer
