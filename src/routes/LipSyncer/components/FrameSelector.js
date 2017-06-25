import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FrameViewer from './FrameViewer'

const Container = styled.div`
  padding: 5px;
  outline: thin dashed red;
`;

const Selection = styled.div`
  display: inline-block;
  margin: 20px;
  height: 200px;
  width: 200px;
  background-color: red;
`;


export const FrameSelector = ({ data, selectFrame }) => (
<div>
  <Container>
    <Selection onClick={()=>{selectFrame(0)}}>
      <FrameViewer frame={0} />
    </Selection>
    <Selection onClick={()=>{selectFrame(1)}}>
      <FrameViewer frame={1} />
    </Selection>
    <Selection onClick={()=>{selectFrame(2)}}>
      <FrameViewer frame={2} />
    </Selection>
    <Selection onClick={()=>{selectFrame(3)}}>
      <FrameViewer frame={3} />
    </Selection>
  </Container>
  <Container>
    <Selection onClick={()=>{selectFrame(4)}}>
      <FrameViewer frame={4} />
    </Selection>
    <Selection onClick={()=>{selectFrame(5)}}>
      <FrameViewer frame={5} />
    </Selection>
    <Selection onClick={()=>{selectFrame(6)}}>
      <FrameViewer frame={6} />
    </Selection>
    <Selection onClick={()=>{selectFrame(7)}}>
      <FrameViewer frame={7} />
    </Selection>
  </Container>
</div>
)

export default FrameSelector
