import { reducer, initialState } from '../../src/reducers/todos'
import { ActionTypes, addTodo } from '../../src/actions/todos'
import * as Actions from '../../src/actions/todos'
import { expect } from 'chai'




describe('<App />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { payload: {}, type: 'init' })).deep.equal(initialState)

  })

  it('should handle action ADD_TODO', () => {
    const action = {
      type: ActionTypes.ADD_TODO,
      payload: {
        todo: {
          name: 'Groceries',
          done: false,
          id: 1
        }
      }
    }
    const expectedState = {
      todos: [
        { name: 'Groceries', done: false, id: 1 }
      ]
    }
    expect(reducer({ todos: [] }, addTodo('Groceries'))).deep.equal(expectedState)

  })

})