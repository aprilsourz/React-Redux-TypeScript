import { combineReducers } from 'redux'
import * as fromTodos from './todos'

export interface State {
  todos: fromTodos.State
}

export const initialState: State = {
  todos: fromTodos.initialState
}

export const reducer = combineReducers<State>({
  todos: fromTodos.reducer
})

