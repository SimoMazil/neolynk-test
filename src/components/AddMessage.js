import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Checkbox } from 'semantic-ui-react'

import ErrorMessage from './ErrorMessage'

const AddMessage = ({submit}) => {
  const [message, onChangeMessage] = useState("")
  const [status, onChangeStatus] = useState("public")
  const [errors, setError] = useState("")

  const onClick = () => {
    const validator = formValidator(message)
    if(validator) setError(validator)
    else submit({message, status})
  }

  const onChangeText = e => {
    onChangeMessage(e.target.value)
  }

  const onChangeCheckbox = (e, {checked}) => {
    checked ? onChangeStatus("private") : onChangeStatus("public")
  }

  const formValidator = (message) => {
    if(!message) return "Message can't be blank!"
    return false;
  }

  return (
    <Form reply>
      {
        errors && <ErrorMessage error={errors}/>
      }
      <Form.TextArea name="message" onChange={onChangeText} value={message}/>
      <Button content='Add Message' labelPosition='left' icon='edit' primary floated="right" onClick={onClick}/>
      <Checkbox label='check to make the message private' value={status} onChange={onChangeCheckbox}/>
    </Form>
  )
}

AddMessage.propTypes = {
  submit: PropTypes.func.isRequired
}

export default AddMessage;