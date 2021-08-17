import React from 'react'
import { mount } from 'enzyme'
import { Login } from './index'

describe('Login', () => {
  const mockLogin = jest.fn()
  const mockClearLoginMessage = jest.fn()

  const initialState = {
    email: '',
    password: '',
    formErrors: {
      email: '',
      password: ''
    }
  }

  const props = {
    isLoading: false,
    successMessage: null,
    errorMessage: null,
    login: mockLogin,
    clearLoginMessage: mockClearLoginMessage
  }

  const login = mount(<Login {...props} t={(key) => key} />)

  it('renders properly', () => {
    expect(login).toMatchSnapshot()
  })

  it('initialize Login with initial state', () => {
    login.setState(initialState)
    expect(login.state()).toEqual(initialState)
  })

  describe('Form handlers', () => {
    describe('when typing into email input', () => {
      const email = 'Michael@gmail.com'

      beforeEach(() => {
        login.find('[name="email"]').simulate('change', {
          target: {
            name: 'email',
            value: email
          }
        })
      })

      it('updates email field in state', () => {
        expect(login.state().email).toEqual(email)
      })
    })

    describe('when typing into password input', () => {
      const password = 'qwerty'

      beforeEach(() => {
        login.find('[name="password"]').simulate('change', {
          target: {
            name: 'password',
            value: password
          }
        })
      })

      it('updates password field in state', () => {
        expect(login.state().password).toEqual(password)
      })
    })

    describe('when submiting the form', () => {
      beforeEach(() => {
        login.find('form').simulate('submit', {
          preventDefault: () => {}
        })
      })

      it('calls the props.logIn', () => {
        expect(mockLogin).toHaveBeenCalledTimes(1)
      })
    })

    describe('when clicking the Login button', () => {
      login.find('button').simulate('click', {
        preventDefault: () => {}
      })

      it('calls the props.logIn', () => {
        expect(mockLogin).toHaveBeenCalledTimes(1)
      })
    })

    afterAll(() => {
      login.setState(initialState)
    })
  })

  describe('disabled attr for submit button', () => {
    beforeEach(() => {
      login.setState(initialState)
    })

    it('render form with disabled button at initial render', () => {
      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render filled form with not disabled button', () => {
      const nextState = {
        ...initialState,
        email: 'michael@gmail.com',
        password: 'qwerty'
      }

      login.find('[name="email"]').simulate('change', {
        target: {
          name: 'email',
          value: nextState.email
        }
      })

      login.find('[name="password"]').simulate('change', {
        target: {
          name: 'password',
          value: nextState.password
        }
      })

      const button = login.find('button')
      expect(button.prop('disabled')).toBeFalsy()
    })

    it('render form with disabled button for bad password', () => {
      const nextState = {
        ...initialState,
        email: 'michael@gmail.com',
        password: 'qwe'
      }

      login.find('[name="email"]').simulate('change', {
        target: {
          name: 'email',
          value: nextState.email
        }
      })

      login.find('[name="password"]').simulate('change', {
        target: {
          name: 'password',
          value: nextState.password
        }
      })

      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render form with disabled button for bad email', () => {
      const nextState = {
        ...initialState,
        email: 'michael',
        password: 'qwerty'
      }

      login.find('[name="email"]').simulate('change', {
        target: {
          name: 'email',
          value: nextState.email
        }
      })

      login.find('[name="password"]').simulate('change', {
        target: {
          name: 'password',
          value: nextState.password
        }
      })

      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render form with disabled button for bad email & password', () => {
      const nextState = {
        ...initialState,
        password: '1',
        email: 'bademail'
      }

      login.find('[name="email"]').simulate('change', {
        target: {
          name: 'email',
          value: nextState.email
        }
      })

      login.find('[name="password"]').simulate('change', {
        target: {
          name: 'password',
          value: nextState.password
        }
      })

      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render form without disabled button, because email & password are correct', () => {
      const nextState = {
        ...initialState,
        email: 'michael@gmail.com',
        password: '123456'
      }

      login.find('[name="email"]').simulate('change', {
        target: {
          name: 'email',
          value: nextState.email
        }
      })

      login.find('[name="password"]').simulate('change', {
        target: {
          name: 'password',
          value: nextState.password
        }
      })

      const button = login.find('button')
      expect(button.prop('disabled')).toBeFalsy()
    })

    afterEach(() => {
      login.setState(initialState)
    })
  })
})
