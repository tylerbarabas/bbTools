import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import json from '../../../../public/img/mouth.json'

const Canvas = styled.canvas`
  height: 100px;
  width: 100px;
`;


class SpriteDisplay extends React.Component {

  componentDidMount() {
    this.canvas = document.getElementById('stage');
    this.audioPlayer = document.getElementById('audio-player');

    this.stage = new createjs.Stage(this.canvas);

    this.ss = new createjs.SpriteSheet(json);
    this.ss._animations.push('seq');
    this.ss._data['seq'] = {frames: this.props.data.anim, name: 'seq', next: null};
    this.ss.framerate = 100;

    this.canvas.height = 100;
    this.canvas.width = 100;

    this.animation = new createjs.Sprite(this.ss,'idle');
    this.stage.addChild(this.animation);

    createjs.Ticker.setFPS(100);
    createjs.Ticker.on('tick',this.handleTick.bind(this));

    this.audioPlayer.addEventListener('play',this.changeAnim.bind(this,'seq',null));
    this.audioPlayer.addEventListener('seeked',this.changeAnim.bind(this,'seq',null));
  }

  handleTick(e) {
    this.stage.update(e);
  }

  componentWillReceiveProps(nextProps) {
    this.changeAnim('seq',nextProps);
  }

  changeAnim(anim,props) {
 
    if (props === null) props = this.props;

    this.stage.removeChild(this.animation);

      let currentFrame = parseInt(this.audioPlayer.currentTime * 100);

      if (props.data.anim.length > 0) {
        if ( typeof props.data.anim[currentFrame] !== 'undefined') {
          this.ss._data.seq.frames = props.data.anim.slice(currentFrame);
        } else {
          this.ss._data.seq.frames = [props.data.anim[props.data.anim.length - 1]];
        }
        if (this.audioPlayer.paused) this.ss._data.seq.frames = [this.ss._data.seq.frames[0]];
      } else {
        anim = 'idle';
      }

    this.animation = new createjs.Sprite(this.ss,anim);
    this.stage.addChild(this.animation);
  }

  render(){
    return (
      <Canvas id="stage">
      </Canvas>
    )
  }

}

SpriteDisplay.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SpriteDisplay
