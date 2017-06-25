import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  background-color: red;
  height: 30px;
  width: 30px;
`;

export const LipSyncer = ({ lipsyncer, increment, doubleAsync, triple }) => (
  <Container>
     
  </Container>
)

LipSyncer.propTypes = {
  lipsyncer: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default LipSyncer
