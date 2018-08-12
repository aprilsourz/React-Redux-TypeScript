import Todo from 'models/Todo'

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface AddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface ToggleTodoAction { type: ActionTypes.TOGGLE_TODO, payload: { todoId: number } }

export function addTodo(name: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        name: name,
        done: false
      }
    }
  }
}

export function toggleTodo(todoId: number): ToggleTodoAction {
  return { type: ActionTypes.TOGGLE_TODO, payload: { todoId } }
}

export type Action = ToggleTodoAction | AddTodoAction