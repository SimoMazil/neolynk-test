import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'

import Message from './Message'
import AddMessage from './AddMessage'

import data from '../api/API'

class MessageList extends Component {
  state = {
    messages: data
  }

  onSubmit = (e) => {
    this.setState({
      messages: [...this.state.messages, e]
    })
  }

  render() {
    const { messages } = this.state
    return (
      <Comment.Group>
        {
          messages.map((message, key) => <Message key={key} {...message}/>)
        }
        <AddMessage submit={this.onSubmit}/>
      </Comment.Group>
    )
  }
}

export default MessageList;