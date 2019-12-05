import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react'

const AddMessage = () => {
  return (
    <Form reply>
      <Form.TextArea />
      <Button content='Add Message' labelPosition='left' icon='edit' primary floated="right" />
      <Checkbox label='check to make the message private' />
    </Form>
  )
}

export default AddMessage;