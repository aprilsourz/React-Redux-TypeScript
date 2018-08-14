import * as React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import AddTodoForm from '../../src/components/AddTodoForm'
import * as sinon from 'sinon'





describe('<AddTodoForm />', () => {

  it('should render', () => {
    const props = { handleSubmit: null }
    const wrapper = mount(<AddTodoForm {...props} />)
    expect(wrapper).to.be.ok
  })


})