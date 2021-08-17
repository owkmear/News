import React from 'react'
import './Select.sass'

/**
 * Element UXSelect
 *
 * @param {string} backgroundColor
 * @param {string} className - Added to all CSS classes.
 * @param {number} onChange
 * @param {array} options - Array of objects [ { en: 'English' }, { ru: 'Russian' } ]
 * @param {number|object} defaultOption - Index of element in 'options' or object of 'options' . Default is first element.
 */

class UXSelect extends React.Component {
  constructor(props) {
    super(props)

    const { options, defaultOption, className } = props

    let currentValue = null
    switch (typeof defaultOption) {
      case 'number':
        currentValue = options[defaultOption]
        break
      case 'object':
        currentValue = defaultOption
        break
      default:
        currentValue = options[0]
        break
    }

    this.state = {
      className,
      isOpen: false,
      options: options,
      current: currentValue
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick)
  }

  handleClick = (event) => {
    const { onChange } = this.props
    const className = event.target.className
    switch (className) {
      case `${this.state.className} сontainer`:
        this.setState({ isOpen: !this.state.isOpen })
        break
      case `${this.state.className} control`:
        this.setState({ isOpen: !this.state.isOpen })
        break
      case `${this.state.className} value-container`:
        this.setState({ isOpen: !this.state.isOpen })
        break
      case `${this.state.className} indicators`:
        this.setState({ isOpen: !this.state.isOpen })
        break
      case `${this.state.className} menu`:
        this.setState({ isOpen: !this.state.isOpen })
        break
      case `${this.state.className} menu hidden`:
        this.setState({ isOpen: !this.state.isOpen })
        break
      case `${this.state.className} menu-list`:
        this.setState({ isOpen: !this.state.isOpen })
        break
      case `${this.state.className} option`:
        const value = event.target.getAttribute('value')
        const option = this.state.options.find((lang) => lang.value === value)
        if (option && value !== this.state.current.value) {
          this.setState({ current: option })
          onChange(option)
        }
        if (this.state.isOpen) this.setState({ isOpen: false })
        break
      default:
        if (this.state.isOpen) this.setState({ isOpen: false })
        break
    }
  }

  render() {
    const { backgroundColor = '#ffffff' } = this.props
    const options = this.state.options.map((option) => (
      <div value={option.value} key={option.value} className={`${this.state.className} option`}>
        {option.label}
      </div>
    ))

    return (
      <div className={`${this.state.className} сontainer`} style={{ backgroundColor }}>
        <div className={`${this.state.className} control`}>
          <div className={`${this.state.className} value-container`}>
            {this.state.current.label}
          </div>
          <div
            className={`${this.state.className} indicators${this.state.isOpen ? ' arrow-up' : ''}`}
          >
            <span></span>
          </div>
        </div>
        <div
          className={
            this.state.isOpen
              ? `${this.state.className} menu`
              : `${this.state.className} menu hidden`
          }
          style={{ backgroundColor }}
        >
          <div className={`${this.state.className} menu-list`}>{options}</div>
        </div>
      </div>
    )
  }
}

export default UXSelect
