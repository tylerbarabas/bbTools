import React from 'react'
import PropTypes from 'prop-types'


class AudioPlayer extends React.Component {

  changed(e) {
//    this.props.changePlaybackRate(e.target.value);
    document.getElementById('audio-player').playbackRate = e.target.value;
  }

  render () {

    let { data } = this.props

    return (
      <div>
        <audio controls id="audio-player" style={{display: 'inline-block'}}>
          <source src="kingoftheworld.wav" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <input type="number" step="0.25" min="0.5" max="4" value="1" onChange={this.changed.bind(this)} style={{width: '50px', display: 'inline-block', verticalAlign: 'top'}} />
      </div>
    )
  }

}



export default AudioPlayer
