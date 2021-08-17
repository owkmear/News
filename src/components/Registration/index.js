import React from 'react';
import { connect } from 'react-redux';
import {
  registration,
  clearRegistrationMessage,
} from '../../store/actions/registration';
import { withTranslation } from 'react-i18next';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const usernameRegex = RegExp(
  /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      formErrors: {
        username: '',
        email: '',
        password: '',
      },
    };

    this.usernameRef = React.createRef();
  }

  componentDidMount() {
    this.usernameRef.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.error('FORM VALID');
      const { username, email, password } = this.state;
      const { registration } = this.props;
      registration(username, email, password);
      this.setState({
        password: '',
      });
    } else {
      console.error('FORM INVALID');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    const { t } = this.props;

    switch (name) {
      case 'username':
        formErrors.username = !usernameRegex.test(value)
          ? t('registration.username-error')
          : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : t('registration.email-error');
        break;
      case 'password':
        formErrors.password =
          value.length < 4 ? t('login.password-error', { symbols: 4 }) : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

    const {
      clearRegistrationMessage,
      successMessage,
      errorMessage,
    } = this.props;
    if (successMessage || errorMessage) clearRegistrationMessage();
  };

  render() {
    const { t, isLoading, successMessage, errorMessage } = this.props;
    const { formErrors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="shadow-box shadow-box_round-big">
              <div className="shadow-box__inner d-flex flex-column">
                <section className="registration">
                  <div className="row">
                    <div className="col-4 m-auto">
                      <h2 className="block__header mb-4 mt-1">
                        {t('registration.sign-up')}
                      </h2>
                      <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form__group">
                          <label>{t('registration.username')}</label>
                          <input
                            className={
                              formErrors.email.length > 0
                                ? 'form__input form__input-error'
                                : 'form__input'
                            }
                            ref={this.usernameRef}
                            disabled={isLoading}
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Michael"
                            type="text"
                            name="username"
                          />
                          <div className="form__field-error">
                            {formErrors.username.length > 0 &&
                              formErrors.username}
                          </div>
                        </div>

                        <div className="form__group">
                          <label>{t('registration.email')}</label>
                          <input
                            className={
                              formErrors.email.length > 0
                                ? 'form__input form__input-error'
                                : 'form__input'
                            }
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
                          <label>{t('registration.password')}</label>
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
                            {formErrors.password.length > 0 &&
                              formErrors.password}
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
                              this.state.username.length === 0 ||
                              this.state.email.length === 0 ||
                              this.state.password.length === 0
                            }
                          >
                            {isLoading ? (
                              <span>{t('registration.sending-data')}</span>
                            ) : (
                              <span>{t('registration.registration')}</span>
                            )}
                          </button>
                        </div>

                        {successMessage ? (
                          <p className="form__message form__message-success">
                            {t(`registration.response.${successMessage}`)}
                          </p>
                        ) : errorMessage ? (
                          <p className="form__message form__message-error">
                            {t(`registration.response.${errorMessage}`)}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.registration.isLoading,
    successMessage: state.registration.successMessage,
    errorMessage: state.registration.errorMessage,
  };
};

const mapDispatchToProps = {
  registration,
  clearRegistrationMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Registration));
