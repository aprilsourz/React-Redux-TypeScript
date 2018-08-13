import * as React from 'react'
import { expect } from 'chai'

import * as Actions from '../../src/actions/todos'


describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: Actions.ActionTypes.ADD_TODO,
      payload: {
        todo: {
          done: false,
          id: 0,
          name: 'test',
        }
      }
    }
    expect(Actions.addTodo('test')).to.deep.equal(expectedAction)
  })

  it('should create an action to toggle a todo', () => {
    const expectedAction = {
      type: Actions.ActionTypes.TOGGLE_TODO,
      payload: {
        todoId: 100
      }
    }
    expect(Actions.toggleTodo(100)).to.deep.equal(expectedAction)
  })
})