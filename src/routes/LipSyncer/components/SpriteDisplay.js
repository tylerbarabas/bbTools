import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Canvas = styled.canvas`
  height: 100px;
  width: 100px;
`;

export const SpriteDisplay = () => (
  <Canvas>
  </Canvas>
)

SpriteDisplay.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SpriteDisplay
