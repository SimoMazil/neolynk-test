import React from 'react';
import PropTypes from 'prop-types';

import { Message } from 'semantic-ui-react'

const ErrorMessage = ({error}) => {
  return (
    <Message negative>
      <Message.Header>{error}</Message.Header>
    </Message>
  )
}

ErrorMessage.prototype = {
  error: PropTypes.string
}

export default ErrorMessage