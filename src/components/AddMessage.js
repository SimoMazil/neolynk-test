import React, { useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react'

const AddMessage = ({submit}) => {
  const [message, onChangeMessage] = useState("")
  const [status, onChangeStatus] = useState("public")

  const onClick = () => {
    submit({message, status})
  }

  const onChangeText = e => {
    onChangeMessage(e.target.value)
  }

  const onChangeCheckbox = (e, {checked}) => {
    checked ? onChangeStatus("private") : onChangeStatus("public")
  }

  return (
    <Form reply>
      <Form.TextArea name="message" onChange={onChangeText} value={message}/>
      <Button content='Add Message' labelPosition='left' icon='edit' primary floated="right" onClick={onClick}/>
      <Checkbox label='check to make the message private' value={status} onChange={onChangeCheckbox}/>
    </Form>
  )
}

export default AddMessage;