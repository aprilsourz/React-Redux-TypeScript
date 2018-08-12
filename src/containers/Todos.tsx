import { connect } from 'react-redux'
import { State } from '../reducers'
import { getTodos } from '../selectors/todos'
import { toggleTodo } from '../actions/todos'
import TodosList from '../components/TodosList'

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  onTodoClicked: toggleTodo
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)