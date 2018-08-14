import { reducer, initialState } from '../../src/reducers/todos'
import { ActionTypes, addTodo, toggleTodo } from '../../src/actions/todos'
import * as Actions from '../../src/actions/todos'
import { expect } from 'chai'




describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { payload: {}, type: 'init' })).deep.equal(initialState)
  })

  it('should handle action ADD_TODO', () => {
    const expectedState = {
      todos: [
        { name: 'Groceries', done: false, id: 1 }
      ]
    }

    expect(reducer({ todos: [] }, addTodo('Groceries'))).deep.equal(expectedState)
  })

  it('should handle action TOGGLE_TODO', () => {
    const initState = {
      todos: [
        { name: 'Mow lawn', id: 1, done: false },
        { name: 'Buy milk', id: 2, done: false },
        { name: 'Groceries', id: 3, done: false },
      ]
    }

    const expectedState = {
      todos: [
        { name: 'Mow lawn', id: 1, done: false },
        { name: 'Buy milk', id: 2, done: true },
        { name: 'Groceries', id: 3, done: false },
      ]
    }

    expect(reducer(initState, toggleTodo(2))).deep.equal(expectedState)

  })
})