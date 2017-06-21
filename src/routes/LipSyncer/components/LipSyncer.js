import React from 'react'
import PropTypes from 'prop-types'

export const LipSyncer = ({ lipsyncer, increment, doubleAsync, triple }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>LipSyncer: {lipsyncer}</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
    <button className='btn btn-secondary' onClick={triple}>
     Triple
    </button>
  </div>
)
LipSyncer.propTypes = {
  lipsyncer: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default LipSyncer
