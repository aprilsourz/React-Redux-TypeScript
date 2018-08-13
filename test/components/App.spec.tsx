import * as React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import App from '../../src/components/App'
import StoreWrapper from '../StoreWrapper'
import AddTodoForm from '../../src/components/AddTodoForm'
import TodosList from '../../src/components/TodosList'



describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.be.ok
  })

  it('should render title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#title').html()).to.equal('<h1 id="title">Todos</h1>')
  })

  it('should render one <AddTodoForm/>', () => {
    const wrapper = mount(<StoreWrapper><App /></StoreWrapper>);
    expect(wrapper.find(AddTodoForm).length).to.equal(1)
  })

  it('should render one <TodosList/>', () => {
    const wrapper = mount(<StoreWrapper><App /></StoreWrapper>);
    expect(wrapper.find(TodosList).length).to.equal(1)
  })
})