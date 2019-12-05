import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'

import Message from './Message'
import AddMessage from './AddMessage'

import messages from '../api/API'

class MessageList extends Component {
  render() {
    return (
      <Comment.Group>
        {
          messages.map((message, key) => <Message key={key} {...message}/>)
        }
        <AddMessage />
      </Comment.Group>
    )
  }
}

export default MessageList;