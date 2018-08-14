import * as React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import TodosList from '../../src/components/TodosList'
import * as sinon from 'sinon'

const sandbox = sinon.createSandbox()

const TODO = [
  {
    name: 'first todo',
    id: 1,
    done: false
  }
]

const TODOS = [
  {
    name: 'first todo',
    id: 1,
    done: false
  },
  {
    name: 'second todo',
    id: 2,
    done: false
  },
  {
    name: 'third todo',
    id: 3,
    done: false
  },
  {
    name: 'fourth todo',
    id: 4,
    done: true
  },
]


describe('<TodosList />', () => {
  afterEach(() => {
    sandbox.restore()
  })

  it('should render', () => {
    const props = { onTodoClicked: () => null, todos: [] }
    const wrapper = shallow(<TodosList {...props} />)
    expect(wrapper).to.be.ok
  })

  it('should render one <ul>', () => {
    const props = { onTodoClicked: () => null, todos: [] }
    const wrapper = shallow(<TodosList {...props} />)
    expect(wrapper.find('ul').length).to.equal(1)
  })

  it('should render with no todos', () => {
    const props = { onTodoClicked: () => null, todos: [] }
    const wrapper = shallow(<TodosList {...props} />)
    expect(wrapper.find('li').length).to.equal(0)
  })

  it('should render one todo', () => {
    const props = { onTodoClicked: () => null, todos: TODO }
    const wrapper = shallow(<TodosList {...props} />)
    expect(wrapper.find('li').length).to.equal(1)
  })

  it('should render correct name', () => {
    const props = { onTodoClicked: () => null, todos: TODO }
    const wrapper = shallow(<TodosList {...props} />)
    expect(wrapper.find('li').first().text()).to.equal('first todo')
  })

  it('should render more than one todo', () => {
    const props = { onTodoClicked: () => null, todos: TODOS }
    const wrapper = shallow(<TodosList {...props} />)
    expect(wrapper.find('li').length).to.be.greaterThan(1)
  })

  it('should render a done todo', () => {
    const props = { onTodoClicked: () => null, todos: TODOS }
    const wrapper = shallow(<TodosList {...props} />)
    expect(wrapper.find('li').at(3).props().style.textDecoration).to.equal('line-through')
  })

  it('should call onTodoClicked once', () => {
    const props = { onTodoClicked: () => null, todos: TODOS }
    sandbox.spy(props, 'onTodoClicked')
    const wrapper = shallow(<TodosList {...props} />)

    wrapper.find('li').at(0).simulate('click')
    expect(props.onTodoClicked.calledOnce).to.be.true
  })

  it('should call onTodoClicked with correct id ', () => {
    const props = { onTodoClicked: () => null, todos: TODOS }
    sandbox.spy(props, 'onTodoClicked')
    const wrapper = shallow(<TodosList {...props} />)

    wrapper.find('li').at(2).simulate('click')
    expect(props.onTodoClicked.args[0][0]).to.eq(3)
  })


})