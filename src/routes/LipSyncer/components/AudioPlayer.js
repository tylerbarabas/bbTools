import React from 'react'
import PropTypes from 'prop-types'

export const AudioPlayer = ({ data, selectFrame }) => (
  <div>
    <audio controls id="audio-player">
      <source src="kingoftheworld.wav" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
)

export default AudioPlayer
