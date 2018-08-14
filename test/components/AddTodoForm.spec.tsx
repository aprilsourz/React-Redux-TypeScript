import * as React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import AddTodoForm from '../../src/components/AddTodoForm'
import * as sinon from 'sinon'





describe('<AddTodoForm />', () => {

  it('should render', () => {
    const props = { handleSubmit: null }
    const wrapper = shallow(<AddTodoForm {...props} />)
    expect(wrapper).to.be.ok
  })

  it('should render one form', () => {
    const props = { handleSubmit: null }
    const wrapper = shallow(<AddTodoForm {...props} />)
    expect(wrapper.find('form').length).to.equal(1)
  })

  it('should render one input', () => {
    const props = { handleSubmit: null }
    const wrapper = shallow(<AddTodoForm {...props} />)
    expect(wrapper.find('input').length).to.equal(1)
  })

  it('input should start empty', () => {
    const props = { handleSubmit: null }

    const wrapper = shallow(<AddTodoForm {...props} />)
    expect(wrapper.find('input').props().value).to.equal('')
  })

  it('input should render button', () => {
    const props = { handleSubmit: null }

    const wrapper = shallow(<AddTodoForm {...props} />)
    expect(wrapper.find('button').text()).to.equal('Add todo !')
  })

  it('should update state', () => {
    const props = { handleSubmit: null }

    const wrapper = shallow(<AddTodoForm {...props} />)
    wrapper.instance().updateValue('test')

    expect(wrapper.find('input').props().value).to.equal('test')
  })





})