import React from 'react'
import { connect } from 'react-redux'
import { login, clearLoginMessage } from '../../store/actions/login'
import { withTranslation } from 'react-i18next'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = ({ formErrors, ...rest }) => {
  let valid = true

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false)
  })

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false)
  })

  return valid
}

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formErrors: {
        email: '',
        password: ''
      }
    }

    this.emailRef = React.createRef()
  }

  componentDidMount() {
    this.emailRef.current.focus()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (formValid(this.state)) {
      const { email, password } = this.state
      const { login } = this.props
      login(email, password)
      this.setState({
        password: ''
      })
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    let formErrors = { ...this.state.formErrors }
    const { t } = this.props

    switch (name) {
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : t('login.email-error')
        break
      case 'password':
        formErrors.password = value.length < 4 ? t('login.password-error', { symbols: 4 }) : ''
        break
      default:
        break
    }

    this.setState({ formErrors, [name]: value })

    const { clearLoginMessage, successMessage, errorMessage } = this.props
    if (successMessage || errorMessage) clearLoginMessage()
  }

  render() {
    const { t, isLoading, successMessage, errorMessage } = this.props
    const { formErrors } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="shadow-box shadow-box_round-big">
              <div className="shadow-box__inner d-flex flex-column">
                <section className="login">
                  <div className="row">
                    <div className="col-4 m-auto">
                      <h2 className="block__header mb-4 mt-1">{t('login.sign-in')}</h2>
                      <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form__group">
                          <label>{t('login.email')}</label>
                          <input
                            className={
                              formErrors.email.length > 0
                                ? 'form__input form__input-error'
                                : 'form__input'
                            }
                            ref={this.emailRef}
                            disabled={isLoading}
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="example@mail.com"
                            type="text"
                            name="email"
                          />
                          <div className="form__field-error">
                            {formErrors.email.length > 0 && formErrors.email}
                          </div>
                        </div>

                        <div className="form__group">
                          <label>{t('login.password')}</label>
                          <input
                            className={
                              formErrors.password.length > 0
                                ? 'form__input form__input-error'
                                : 'form__input'
                            }
                            disabled={isLoading}
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                          />
                          <div className="form__field-error">
                            {formErrors.password.length > 0 && formErrors.password}
                          </div>
                        </div>

                        <div className="form__group">
                          <button
                            type="submit"
                            className="blue-button"
                            disabled={
                              isLoading ||
                              formErrors.email.length !== 0 ||
                              formErrors.password.length !== 0 ||
                              successMessage ||
                              errorMessage ||
                              this.state.email.length === 0 ||
                              this.state.password.length === 0
                            }
                          >
                            {isLoading ? (
                              <span>{t('login.sending-data')}</span>
                            ) : (
                              <span>{t('login.login')}</span>
                            )}
                          </button>
                        </div>

                        {successMessage ? (
                          <p className="form__message form__message-success">
                            {t(`login.response.${successMessage}`)}
                          </p>
                        ) : errorMessage ? (
                          <p className="form__message form__message-error">
                            {t(`login.response.${errorMessage}`)}
                          </p>
                        ) : (
                          <p className="form__message"></p>
                        )}
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.login.isLoading,
    successMessage: state.login.successMessage,
    errorMessage: state.login.errorMessage
  }
}

const mapDispatchToProps = {
  login,
  clearLoginMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Login))
