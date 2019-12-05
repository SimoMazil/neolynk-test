import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'

import Message from './Message'
import AddMessage from './AddMessage'

class MessageList extends Component {
  render() {
    return (
      <Comment.Group>
        <Message />
        <AddMessage />
      </Comment.Group>
    )
  }
}

export default MessageList;