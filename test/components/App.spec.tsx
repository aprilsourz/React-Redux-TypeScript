import * as React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import App from '../../src/components/App'
import StoreWrapper from '../StoreWrapper'



describe('<App />', () => {
  it('Should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.be.ok
  })

  it('Should render title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#title').html()).to.equal('<h1 id="title">Todos</h1>')
  })

  it('Should render one <AddTodo/>', () => {
    const wrapper = mount(<StoreWrapper><App /></StoreWrapper>);
    const x = wrapper.find('AddTodo')
    console.log(x.length)
  })
})