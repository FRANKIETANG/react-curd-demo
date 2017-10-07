import { connect } from 'react-redux'
import TodoList from '../Components/TodoList'

const mapStateToProps = (state, ownProps) => ({
    todos: state
})

const VisibleTodoList = connect(mapStateToProps)(TodoList)

export default VisibleTodoList