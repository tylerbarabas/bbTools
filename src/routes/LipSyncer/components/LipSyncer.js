import React from 'react'
import PropTypes from 'prop-types'
import FrameSelector from './FrameSelector'

export const LipSyncer = ({ lipsyncer, increment, doubleAsync, triple }) => (
  <div>
    <FrameSelector />
  </div>
)

LipSyncer.propTypes = {
  lipsyncer: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default LipSyncer
