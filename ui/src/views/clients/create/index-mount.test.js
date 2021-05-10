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

  const inputName = create.find('input').at(0)
  inputName.instance().value = "Luis";
  expect(inputName.instance().value).toEqual('Luis');

  const lastName = create.find('input').at(1)
  lastName.instance().value = "Arce";
  expect(lastName.instance().value).toEqual('Arce');


})
