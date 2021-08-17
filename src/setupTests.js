// eslint-disable-next-line
import raf from './tempPolyfills'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter(),
  snapshotSerializers: ['enzyme-to-json/serializer']
})

global.shallow = shallow
global.render = render
global.mount = mount

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message)
}

global.Date.now = jest.fn(() => new Date('08.15.2019 14:37:18'))

// Return milliseconds from 1970
// global.Date.parse = jest.fn(() => new Date('07.15.2010 14:37:18'));

// Return milliseconds from 1970 by UTC
// global.Date.UTC = jest.fn(() => new Date('07.15.2000 14:37:18'));
