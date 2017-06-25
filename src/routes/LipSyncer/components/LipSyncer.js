import React from 'react'
import PropTypes from 'prop-types'
import FrameSelector from './FrameSelector'

export const LipSyncer = ({ data, selectFrame }) => (
  <div>
    <FrameSelector selectFrame={selectFrame} data={data} />
  </div>
)

LipSyncer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LipSyncer
