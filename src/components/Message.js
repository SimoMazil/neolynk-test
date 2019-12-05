import React from 'react';
import { Comment, Label, Icon, Divider } from 'semantic-ui-react'

const Message = ({name, message, status}) => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author>Tom Lukic</Comment.Author>
        <Comment.Text>
          This will be great for business reports. I will definitely download this.
        </Comment.Text>
        <Comment.Action>
          <Label>
            <Icon name='unlock' /> Public
          </Label>
        </Comment.Action>
      </Comment.Content>
      <Divider />
    </Comment>
  )
}

export default Message;