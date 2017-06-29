import React from 'react'
import PropTypes from 'prop-types'
import FrameSelector from './FrameSelector'
import AudioPlayer from './AudioPlayer'

export const LipSyncer = ({ data, selectFrame }) => (
  <div>
    <AudioPlayer />
    <FrameSelector selectFrame={selectFrame} data={data} />
  </div>
)

LipSyncer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LipSyncer
