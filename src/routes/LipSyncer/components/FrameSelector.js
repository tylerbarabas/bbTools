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

const handleClick = (e) => {
  console.log('handleClick',e.target);
}

export const FrameSelector = () => (
<div>
  <Container>
    <Selection onClick={handleClick}>
      <FrameViewer frame={0} />
    </Selection>
    <Selection>
      <FrameViewer frame={1} />
    </Selection>
    <Selection>
      <FrameViewer frame={2} />
    </Selection>
    <Selection>
      <FrameViewer frame={3} />
    </Selection>
  </Container>
  <Container>
    <Selection>
      <FrameViewer frame={4} />
    </Selection>
    <Selection>
      <FrameViewer frame={5} />
    </Selection>
    <Selection>
      <FrameViewer frame={6} />
    </Selection>
    <Selection>
      <FrameViewer frame={7} />
    </Selection>
  </Container>
</div>
)

export default FrameSelector
