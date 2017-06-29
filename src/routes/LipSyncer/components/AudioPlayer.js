import React from 'react'
import PropTypes from 'prop-types'

export const AudioPlayer = ({ data, selectFrame }) => (
  <div>
    <audio controls>
      <source src="kingoftheworld.wav" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
)

AudioPlayer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AudioPlayer
