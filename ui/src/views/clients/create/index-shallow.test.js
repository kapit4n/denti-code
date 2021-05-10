import Create from './index';
import TextField from '@material-ui/core/TextField'

import { shallow, mount, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
test('example', () => {
  const create = shallow(<Create />);
  expect(create.find('input').length).toBe(1)
  expect(create.find(TextField).length).toBe(2)
  expect(create.find('div').length).toBe(3)
  expect(create.find('form').length).toBe(1)
})