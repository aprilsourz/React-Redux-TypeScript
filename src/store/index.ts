import { createStore } from 'redux'
import { State, reducer } from '../reducers'

const store = createStore<State, any, any, any>(reducer)

export default store