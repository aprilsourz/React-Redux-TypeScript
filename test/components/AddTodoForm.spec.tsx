import * as React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import AddTodoForm from '../../src/components/AddTodoForm'
import * as sinon from 'sinon'

const sandbox = sinon.createSandbox()


describe('<AddTodoForm />', () => {
  afterEach(() => {
    sandbox.restore()
  })

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

  it('should call submit function with no value', () => {
    const props = { handleSubmit: null }
    sandbox.spy(AddTodoForm.prototype, 'handleSubmit')
    const wrapper = shallow(<AddTodoForm {...props} />)

    wrapper.find('form').first().simulate('submit', { preventDefault: sinon.stub() })
    expect(AddTodoForm.prototype.handleSubmit.calledOnce).to.be.true
  })

  it('should not call props.handleSubmit with no value', () => {
    const props = { handleSubmit: () => null }
    sandbox.spy(props, 'handleSubmit')
    const wrapper = shallow(<AddTodoForm {...props} />)

    wrapper.find('form').first().simulate('submit', { preventDefault: sinon.stub() })
    expect(props.handleSubmit.callCount).to.equal(0)
  })

  it('should call props.handleSubmit with value', () => {
    const props = { handleSubmit: () => null }
    sandbox.spy(props, 'handleSubmit')
    const wrapper = shallow(<AddTodoForm {...props} />)

    wrapper.setState({ value: 'test' })
    wrapper.find('form').first().simulate('submit', { preventDefault: sinon.stub() })

    expect(props.handleSubmit.calledOnce).to.be.true
  })







})