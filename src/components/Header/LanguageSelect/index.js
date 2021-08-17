import React from 'react';
import UXSelect from '../../UX/UXSelect';
import './LanguageSelect.sass';

const options = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
];

class LanguageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: options.find(
        lang => lang.value === props.defaultLanguage
      ),
    };
  }

  handleChange = selectedOption => {
    const { changeLanguage } = this.props;
    this.setState({ selectedOption });
    changeLanguage(selectedOption.value);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <UXSelect
        backgroundColor={'#dddddd'}
        className={'language-select'}
        defaultOption={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default LanguageSelect;
