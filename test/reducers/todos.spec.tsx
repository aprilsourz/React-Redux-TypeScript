import { reducer, initialState } from '../../src/reducers/todos'
import * as Actions from '../../src/actions/todos'
import { expect } from 'chai'




describe('<App />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { payload: {}, type: 'init' })).deep.equal(initialState)

  })

})