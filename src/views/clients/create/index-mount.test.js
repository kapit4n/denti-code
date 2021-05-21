import Create from './main';

import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
test('example', () => {

  const spy = jest.fn();

  const create = mount(<Create onSubmit={spy} />);
  expect(create.find('input').length).toBe(2)
  expect(create.find('div').length).toBe(7)

  const inputName = create.find('input').at(0)
  inputName.instance().value = "Luis";
  expect(inputName.instance().value).toEqual('Luis');

  const lastName = create.find('input').at(1)
  lastName.instance().value = "Arce";
  expect(lastName.instance().value).toEqual('Arce');

  create.find('form').at(0).simulate('submit');
  create.update();
  //expect(spy).toHaveBeenCalled();

})
