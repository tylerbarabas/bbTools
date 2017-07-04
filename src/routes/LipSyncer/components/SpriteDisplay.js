import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import json from '../../../../public/img/mouth.json'

const Canvas = styled.canvas`
  height: 100px;
  width: 100px;
`;

class SpriteDisplay extends React.Component {

  constructor(props) {
    super();
    this.stage = new createjs.Stage(document.getElementById('stage'));
    this.ss = new createjs.SpriteSheet(json);
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
