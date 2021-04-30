import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card } from '@material-ui/core'
jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });
import Main from './main'

describe('Details', () => {
  const data = {
    lastName: "Arce", fistName: "Luis", id: 1
  };

  it('renders a card', () => {
    const wrapper = shallow(<Main data={data}/>);
    expect(wrapper.find(Card)).to.have.lengthOf(1)
  })

})