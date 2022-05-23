import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import UserLogin from './Login';

test('renders content ', () => {
const login = {
  content: 'This is a test',
  important: true
}
const component = render(<UserLogin login={login}/>)
expect(component).toHaveTextContent(login.content)
});
