import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, InconButton, IconButton } from '@material-ui/core'
import axios from 'axios';
jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });
import Index from './main'

describe('List Index', () => {
  const data = [{
    lastName: "Arce", fistName: "Luis", id: 1
  }];

  it('renders with one List', () => {
    const wrapper = shallow(<Index clients={data} goToItem={() => { }} />);
    expect(wrapper.find(List)).to.have.lengthOf(1)
  })

  it('renders with two ListItems', () => {
    const wrapper = shallow(<Index clients={data} goToItem={() => { }} />);
    expect(wrapper.find(ListItem)).to.have.lengthOf(1)
  })

})