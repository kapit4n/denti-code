import Create from './index';
import TextField from '@material-ui/core/TextField'

import { shallow, mount, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
test('example', () => {
  const create = mount(<Create />);
  expect(create.find('input').length).toBe(3)
  expect(create.find('div').length).toBe(7)
  create.find('input').at(0).simulate('change', { target: { value: "Luis" } });
  create.find('input').at(1).simulate('change', { target: { value: "Arce" } });
  // create.find('input').at(2).simulate('click');
  expect(create.find('input').get(0).value).toBe("Luis")
})
