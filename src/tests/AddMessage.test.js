import { formValidator } from '../components/AddMessage';

describe('Add Message Componenet', () => {
  it('Validator should return an error message', () => {
    expect(formValidator()).toBe("Message can't be blank!")
  });

  it('Validator should return false', () => {
    expect(formValidator("Hello World!")).toBe(false)
  });
});