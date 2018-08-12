import { createStore } from 'redux'
import { State, reducer } from '../reducers'

const store = createStore<State>(reducer)

export default store