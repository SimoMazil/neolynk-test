import React from 'react';
import { Comment, Label, Icon, Divider } from 'semantic-ui-react'

const Message = ({message, status}) => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Text>
          {message}
        </Comment.Text>
        <Comment.Action>
          <Label>
            <Icon name={status === 'public' ? 'unlock' : 'lock'} /> {status}
          </Label>
        </Comment.Action>
      </Comment.Content>
      <Divider />
    </Comment>
  )
}

export default Message;